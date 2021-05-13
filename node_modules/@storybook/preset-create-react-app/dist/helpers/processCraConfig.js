"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processCraConfig = void 0;
var path_1 = require("path");
var semver_1 = __importDefault(require("semver"));
var isRegExp = function (value) {
    return value instanceof RegExp;
};
var isString = function (value) {
    return typeof value === 'string';
};
// This handles arrays in Webpack rule tests.
var testMatch = function (rule, string) {
    if (!rule.test)
        return false;
    return Array.isArray(rule.test)
        ? rule.test.some(function (test) { return isRegExp(test) && test.test(string); })
        : isRegExp(rule.test) && rule.test.test(string);
};
var processCraConfig = function (craWebpackConfig, options) {
    var configDir = path_1.resolve(options.configDir);
    /*
     * NOTE: As of version 5.3.0 of Storybook, Storybook's default loaders are no
     * longer appended when using this preset, meaning less customisation is
     * needed when used alongside that version.
     *
     * When loaders were appended in previous Storybook versions, some CRA loaders
     * had to be disabled or modified to avoid conflicts.
     *
     * See: https://github.com/storybookjs/storybook/pull/9157
     */
    var storybookVersion = semver_1.default.coerce(options.packageJson.version) || '';
    var isStorybook530 = semver_1.default.gte(storybookVersion, '5.3.0');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return craWebpackConfig.module.rules.reduce(function (rules, rule) {
        var oneOf = rule.oneOf, include = rule.include;
        // Add our `configDir` to support JSX and TypeScript in that folder.
        if (testMatch(rule, '.jsx')) {
            var newRule = __assign(__assign({}, rule), { include: [include, configDir] });
            return __spread(rules, [newRule]);
        }
        /*
         * CRA makes use of Webpack's `oneOf` feature.
         * https://webpack.js.org/configuration/module/#ruleoneof
         *
         * Here, we map over those rules and add our `configDir` as above.
         */
        if (oneOf) {
            return __spread(rules, [
                {
                    oneOf: oneOf.map(function (oneOfRule) {
                        var _a, _b;
                        if (isString(oneOfRule.loader) &&
                            /[/\\]file-loader[/\\]/.test(oneOfRule.loader)) {
                            if (isStorybook530) {
                                var excludes = __spread([
                                    'ejs',
                                    'md',
                                    'mdx'
                                ], (((_a = options.craOverrides) === null || _a === void 0 ? void 0 : _a.fileLoaderExcludes) || []));
                                var excludeRegex = new RegExp("\\.(" + excludes.join('|') + ")$");
                                return __assign(__assign({}, oneOfRule), { 
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    exclude: __spread(oneOfRule.exclude, [excludeRegex]) });
                            }
                            return {};
                        }
                        // This rule causes conflicts with Storybook addons like `addon-info`.
                        if (testMatch(oneOfRule, '.css')) {
                            return __assign(__assign({}, oneOfRule), { include: isStorybook530 ? undefined : [configDir], exclude: [oneOfRule.exclude, /@storybook/] });
                        }
                        // Used for the next two rules modifications.
                        var isBabelLoader = isString(oneOfRule.loader) &&
                            /[/\\]babel-loader[/\\]/.test(oneOfRule.loader);
                        // Target `babel-loader` and add user's Babel config.
                        if (isBabelLoader &&
                            isRegExp(oneOfRule.test) &&
                            oneOfRule.test.test('.jsx')) {
                            var _include = oneOfRule.include, ruleOptions = oneOfRule.options;
                            var _c = typeof ruleOptions === 'object' ? ruleOptions : {}, _d = _c.plugins, rulePlugins = _d === void 0 ? [] : _d, _e = _c.presets, rulePresets = _e === void 0 ? [] : _e;
                            var _f = options.babelOptions, _extends = _f.extends, _g = _f.plugins, plugins = _g === void 0 ? [] : _g, _h = _f.presets, presets = _h === void 0 ? [] : _h;
                            return __assign(__assign({}, oneOfRule), { include: [_include, configDir], options: __assign(__assign({}, ruleOptions), { extends: _extends, plugins: __spread(plugins, rulePlugins), presets: __spread(presets, rulePresets), 
                                    // A temporary fix to align with Storybook 6.
                                    overrides: [
                                        {
                                            test: ((_b = options.typescriptOptions) === null || _b === void 0 ? void 0 : _b.reactDocgen) ===
                                                'react-docgen'
                                                ? /\.(mjs|tsx?|jsx?)$/
                                                : /\.(mjs|jsx?)$/,
                                            plugins: [
                                                [
                                                    require.resolve('babel-plugin-react-docgen'),
                                                    {
                                                        DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES',
                                                    },
                                                ],
                                            ],
                                        },
                                    ] }) });
                        }
                        // Target `babel-loader` that processes `node_modules`, and add Storybook config dir.
                        if (isBabelLoader &&
                            isRegExp(oneOfRule.test) &&
                            oneOfRule.test.test('.js')) {
                            return __assign(__assign({}, oneOfRule), { include: [configDir] });
                        }
                        return oneOfRule;
                    }),
                },
            ]);
        }
        return __spread(rules, [rule]);
    }, []);
};
exports.processCraConfig = processCraConfig;
//# sourceMappingURL=processCraConfig.js.map