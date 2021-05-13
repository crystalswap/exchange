import { Configuration, RuleSetRule } from 'webpack';
import { StorybookConfig } from '../types';
export declare const processCraConfig: (craWebpackConfig: Configuration, options: StorybookConfig) => RuleSetRule[];
