import { Configuration } from 'webpack';
import { StorybookConfig } from './types';
export declare const babelDefault: () => Record<string, (string | [string, object])[]>;
export declare const managerWebpack: (webpackConfig?: Configuration) => Configuration;
export declare const webpack: (webpackConfig: Configuration | undefined, options: StorybookConfig) => Configuration;
