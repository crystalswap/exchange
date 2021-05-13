import { document } from 'global';
import renderStorybookUI from '@storybook/ui';
import Provider from './provider';
import { importPolyfills } from './conditional-polyfills';
importPolyfills().then(function () {
  var rootEl = document.getElementById('root');
  renderStorybookUI(rootEl, new Provider());
});