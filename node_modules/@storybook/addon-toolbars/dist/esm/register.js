import React from 'react';
import addons, { types } from '@storybook/addons';
import { ToolbarManager } from './components/ToolbarManager';
import { ID } from './constants';
addons.register(ID, function (api) {
  return addons.add(ID, {
    title: ID,
    type: types.TOOL,
    match: function match() {
      return true;
    },
    render: function render() {
      return /*#__PURE__*/React.createElement(ToolbarManager, null);
    }
  });
});