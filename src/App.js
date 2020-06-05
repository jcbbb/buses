import React, { useState } from 'react';
import MenuContext from './context/MenuContext';
import UserContext from './context/UserContext';
import useRoutes from './hooks/useRoutes';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const routes = useRoutes(isAuthenticated);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <UserContext.Provider
            value={{
                setIsAuthenticated,
            }}
        >
            <MenuContext.Provider
                value={{
                    isOpen,
                    setIsOpen,
                }}
            >
                <div className="App">{routes}</div>
            </MenuContext.Provider>
        </UserContext.Provider>
    );
};

export default App;
