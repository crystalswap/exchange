import type { PluginItem } from '@babel/core';
import type { PluginOptions } from 'react-docgen-typescript-plugin';
export declare type Preset = string | {
    name: string;
};
export interface StorybookConfig {
    /**
     * Optionally set the package name of a react-scripts fork.
     * In most cases, the package is located automatically by this preset.
     */
    scriptsPackageName?: string;
    /**
     * Overrides for Create React App's Webpack configuration.
     */
    craOverrides?: {
        fileLoaderExcludes?: string[];
    };
    configDir: string;
    babelOptions: {
        extends: string | null;
        plugins: PluginItem[] | null;
        presets: PluginItem[] | null;
    };
    presetsList: Preset[];
    packageJson: {
        version: string;
    };
    typescriptOptions?: {
        reactDocgen: 'react-docgen-typescript' | 'react-docgen' | false;
        reactDocgenTypescriptOptions: PluginOptions;
    };
}
