import React from "react";

interface User{
    id: string;
    email: string;
    name: string;
}

// Export para ref das pages.
export interface UserContextType {
    user: User | null;
    updateUser: (newUser: User)=> void;
    clearUser: ()=> void;
}

export const UserContext = React.createContext<UserContextType>(
    {
        user: null, 
        updateUser: ()=> {}, 
        clearUser: ()=> {},
    }
);

export function UserProvider({children}: {children: React.ReactNode}){
    const [user, setUser] = React.useState<User | null>(null);

    function updateUser(newUser: User) {
        
        const userData = {
            id: newUser.id,
            email: newUser.email,
            name: newUser.name
        };

        setUser(userData);
    }

    function clearUser(){
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, updateUser, clearUser}}>
            {children}
        </UserContext.Provider>
    );
}