import { createContext } from 'react';

const UserContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: true,
});

export default UserContext;
