import React, { createContext, useContext, useState } from 'react';

const UserContextProfile = createContext(undefined);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        roles: ["Admin", "User"],
        profileImage: "https://i.pravatar.cc/64",
        person: {
            name: "Jane Doe"
        }
    });

    return (
        <UserContextProfile.Provider value={{ user, setUser }}>
            {children}
        </UserContextProfile.Provider>
    );
}

export const useUser = () => useContext(UserContextProfile);
