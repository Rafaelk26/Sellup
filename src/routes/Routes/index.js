import React from "react";

// Routes
import AuthRoutes from "../auth.routes";
import UserRoutes from "../user.routes";

// Context
import { UserContext } from "../../context/User";

export function Routes(){
    const { user } = React.useContext(UserContext);

    return user ? <UserRoutes /> : <AuthRoutes />;
}