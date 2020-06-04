import React, { useState } from 'react';
import MenuContext from './context/MenuContext';
import useRoutes from './hooks/useRoutes';

const App = () => {
    const routes = useRoutes(true);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MenuContext.Provider
            value={{
                isOpen,
                setIsOpen,
            }}
        >
            <div className="App">{routes}</div>
        </MenuContext.Provider>
    );
};

export default App;
