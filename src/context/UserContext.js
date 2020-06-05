import { createContext } from 'react';

const UserContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});

export default UserContext;
