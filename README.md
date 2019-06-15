# react-native-simple-popup-menu

Popup menu for react-native based on material android design and ActionSheetIOS based popup menu for iOS. There is no linking required as it is based on the Native android module and ActionSheetIOS.

### Usage

#### Installation

    npm i react-native-simple-popup-menu --save

#### Import

    import SimplePopupMenu from 'react-native-simple-popup-menu'

### API

    const items = [
      { id: 'edit', label: 'Edit' },
      { id: 'delete', label: 'Delete' },
    ];

    <SimplePopupMenu
        items={items}
        style={styles.button}
        onSelect={this.onMenuPress}
        onCancel={() => console.log('onCancel')}>
        <Text>Show menu</Text>
    </SimplePopupMenu>

#### iOS

    Support for additional cancel label

    const items = [
      { id: 'cancel', label: 'Canćel' }, // IF IT IS NOT Cancel
      { id: 'edit', label: 'Edit' },
      { id: 'delete', label: 'Delete' },
    ];

    <SimplePopupMenu
        items={items}
        style={styles.button}
        onSelect={this.onMenuPress}
        cancelLabel={'Canćel'}
        onCancel={() => console.log('onCancel')}>
        <Text>Show menu</Text>
    </SimplePopupMenu>


### Types

[Flow](http://flow.org/) is used as the typing system.

#### Exported Types

    import type {
        PopupMenuItem,
    } from 'react-native-simple-popup-menu'

##### `type PopupMenuItem`

>     { id?: any, label: string }
