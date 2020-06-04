import { createContext } from 'react';

const MenuContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
});

export default MenuContext;
