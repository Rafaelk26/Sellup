import { useState } from "react";

// Routes
import AuthRoutes from "../auth.routes";
import UserRoutes from "../user.routes";

export function Routes(){
    const [user, setUser] = useState(null);

    return user ? <UserRoutes /> : <AuthRoutes />;
}