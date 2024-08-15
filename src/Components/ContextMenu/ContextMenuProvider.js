import React, {createContext, useState, useContext} from 'react';
import ContextMenu from './ContextMenu';

const ContextMenuContext = createContext();

export const ContextMenuProvider = ({children}) => {
    const [menuState, setMenuState] = useState({
        visible: false,
        position: {x: 0, y: 0},
        items: []
    });

    const showMenu = (items, x, y) => {
        setMenuState({
            visible: true,
            position: {x, y},
            items
        });
    };

    const hideMenu = () => {
        setMenuState({...menuState, visible: false});
    };

    return (
        <ContextMenuContext.Provider value={{showMenu, hideMenu}}>
            {children}
            <ContextMenu
                items={menuState.items}
                position={menuState.position}
                visible={menuState.visible}
                onClose={hideMenu}
            />
        </ContextMenuContext.Provider>
    );
};

export const useContextMenu = () => useContext(ContextMenuContext);
