import React from 'react'
import { findNodeHandle, UIManager } from 'react-native'
import { TouchableOpacity } from 'react-native'
import type { Element } from 'react'

type PopupMenuItem = { id?: any, label: string }

export default class PopupMenu extends React.Component {
  showMenu = () => {
    const { items, onCancel, onSelect } = this.props;
    UIManager.showPopupMenu(
        findNodeHandle(this.containerRef),
        items.map(item => item.label),
        function(err) {
          if (onCancel) {
            onCancel();
          }
        },
        function(eventName: 'dismissed' | 'itemSelected', selectedIndex?: number) {
            if (eventName === 'itemSelected') {
              onSelect(items[selectedIndex]);
            } else {
              onCancel && onCancel();
            }
        }
    )
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
