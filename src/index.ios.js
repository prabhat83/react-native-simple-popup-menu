// @flow
import React from 'react'
import { ActionSheetIOS, TouchableOpacity } from 'react-native'

import type { Element } from 'react'

type PopupMenuItem = { id?: any, label: string }

export default class PopupMenu extends React.Component {
  showMenu = async () => {
    const { items, onCancel, onSelect, cancelLabel } = this.props;
    const actionSheetItems = items.map(item => item.label);
    actionSheetItems.unshift(cancelLabel || 'Cancel');

    const selectedIndex: number = await new Promise(resolve =>
        ActionSheetIOS.showActionSheetWithOptions({
            options: actionSheetItems,
            cancelButtonIndex: 0
        }, resolve)
    );

    if (selectedIndex === 0) {
        if (onCancel) onCancel();
    } else {
        onSelect(items[selectedIndex - 1]);
    }
  }
  render() {
    const { children, style, activeOpacity } = this.props;
    return (<TouchableOpacity
      style={style}
      activeOpacity={activeOpacity || .5}
      onPress={this.showMenu}
      ref={(c) => this.containerRef = c}>
      {children}
    </TouchableOpacity>)
  }
}

export type { PopupMenuItem }
