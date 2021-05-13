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
exports.webpack = exports.managerWebpack = exports.babelDefault = void 0;
var path_1 = require("path");
var semver_1 = __importDefault(require("semver"));
var node_logger_1 = require("@storybook/node-logger");
var pnp_webpack_plugin_1 = __importDefault(require("pnp-webpack-plugin"));
var react_docgen_typescript_plugin_1 = __importDefault(require("react-docgen-typescript-plugin"));
var mergePlugins_1 = require("./helpers/mergePlugins");
var getReactScriptsPath_1 = require("./helpers/getReactScriptsPath");
var processCraConfig_1 = require("./helpers/processCraConfig");
var checkPresets_1 = require("./helpers/checkPresets");
var getModulePath_1 = require("./helpers/getModulePath");
var CWD = process.cwd();
var REACT_SCRIPTS_PATH = getReactScriptsPath_1.getReactScriptsPath();
var OPTION_SCRIPTS_PACKAGE = 'scriptsPackageName';
// Ensures that assets are served from the correct path when Storybook is built.
// Resolves: https://github.com/storybookjs/storybook/issues/4645
if (!process.env.PUBLIC_URL) {
    process.env.PUBLIC_URL = '.';
}
// This loader is shared by both the `managerWebpack` and `webpack` functions.
var resolveLoader = {
    modules: ['node_modules', path_1.join(REACT_SCRIPTS_PATH, 'node_modules')],
    plugins: [pnp_webpack_plugin_1.default.moduleLoader(module)],
};
// Don't use Storybook's default Babel config.
var babelDefault = function () { return ({
    presets: [],
    plugins: [],
}); };
exports.babelDefault = babelDefault;
// Ensure that loaders are resolved from react-scripts.
var managerWebpack = function (webpackConfig) {
    if (webpackConfig === void 0) { webpackConfig = {}; }
    return (__assign(__assign({}, webpackConfig), { resolveLoader: resolveLoader }));
};
exports.managerWebpack = managerWebpack;
// Update the core Webpack config.
var webpack = function (webpackConfig, options) {
    if (webpackConfig === void 0) { webpackConfig = {}; }
    var scriptsPath = REACT_SCRIPTS_PATH;
    // Flag any potentially conflicting presets.
    checkPresets_1.checkPresets(options);
    // If the user has provided a package by name, try to resolve it.
    var scriptsPackageName = options[OPTION_SCRIPTS_PACKAGE];
    if (typeof scriptsPackageName === 'string') {
        try {
            scriptsPath = path_1.dirname(require.resolve(scriptsPackageName + "/package.json", {
                paths: [options.configDir],
            }));
        }
        catch (e) {
            node_logger_1.logger.warn("A `" + OPTION_SCRIPTS_PACKAGE + "` was provided, but couldn't be resolved.");
        }
    }
    // If there isn't a scripts-path set, return the Webpack config unmodified.
    if (!scriptsPath) {
        node_logger_1.logger.error('Failed to resolve a `react-scripts` package.');
        return webpackConfig;
    }
    node_logger_1.logger.info("=> Loading Webpack configuration from `" + path_1.relative(CWD, scriptsPath) + "`");
    // Remove existing rules related to JavaScript and TypeScript.
    node_logger_1.logger.info("=> Removing existing JavaScript and TypeScript rules.");
    var filteredRules = webpackConfig.module &&
        webpackConfig.module.rules.filter(function (_a) {
            var test = _a.test;
            return !(test instanceof RegExp &&
                ((test && test.test('.js')) || test.test('.ts')));
        });
    // Require the CRA config and set the appropriate mode.
    var craWebpackConfigPath = path_1.join(scriptsPath, 'config', 'webpack.config');
    // eslint-disable-next-line global-require, import/no-dynamic-require, @typescript-eslint/no-var-requires
    var craWebpackConfig = require(craWebpackConfigPath)(webpackConfig.mode);
    // Select the relevent CRA rules and add the Storybook config directory.
    node_logger_1.logger.info("=> Modifying Create React App rules.");
    var craRules = processCraConfig_1.processCraConfig(craWebpackConfig, options);
    // CRA uses the `ModuleScopePlugin` to limit suppot to the `src` directory.
    // Here, we select the plugin and modify its configuration to include Storybook config directory.
    var plugins = craWebpackConfig.resolve.plugins.map(function (plugin) {
        if (plugin.appSrcs) {
            // Mutate the plugin directly as opposed to recreating it.
            // eslint-disable-next-line no-param-reassign
            plugin.appSrcs = __spread(plugin.appSrcs, [path_1.resolve(options.configDir)]);
        }
        return plugin;
    });
    // NOTE: These are set by default in Storybook 6.
    var isStorybook6 = semver_1.default.gte(options.packageJson.version || '', '6.0.0');
    var _a = options.typescriptOptions, typescriptOptions = _a === void 0 ? {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {},
    } : _a;
    var tsDocgenPlugin = !isStorybook6 && typescriptOptions.reactDocgen === 'react-docgen-typescript'
        ? [
            new react_docgen_typescript_plugin_1.default(typescriptOptions.reactDocgenTypescriptOptions),
        ]
        : [];
    // Return the new config.
    return __assign(__assign({}, webpackConfig), { module: __assign(__assign({}, webpackConfig.module), { rules: __spread((filteredRules || []), craRules) }), 
        // NOTE: this prioritizes the storybook version of a plugin
        // when there are duplicates between SB and CRA
        plugins: mergePlugins_1.mergePlugins.apply(void 0, __spread((webpackConfig.plugins || []), craWebpackConfig.plugins, tsDocgenPlugin)), resolve: __assign(__assign({}, webpackConfig.resolve), { extensions: craWebpackConfig.resolve.extensions, modules: __spread(((webpackConfig.resolve && webpackConfig.resolve.modules) || []), [
                path_1.join(REACT_SCRIPTS_PATH, 'node_modules')
            ], getModulePath_1.getModulePath(CWD)), plugins: __spread(plugins, [pnp_webpack_plugin_1.default]) }), resolveLoader: resolveLoader });
};
exports.webpack = webpack;
//# sourceMappingURL=index.js.map