import React from "react";
import { UserContext } from "../../context/User";

// Components
import { DashboardContent } from "./components/DashboardContent";
import { DashboardSkeleton } from "./components/DashboardSkeleton";
import { Wrapper } from "../../components/Wrapper";

export default function Dashboard(){

    const [loading, setLoading] = React.useState<boolean>(true);
    const { user, clearUser, updateUser } = React.useContext(UserContext);

    // Omite durante 10s o content, depois exibe. (Simulando um skeleton no dashboard)
    React.useEffect(()=> {
        setTimeout(()=> {
            setLoading(false);
        }, 10000);
    }, []);

    return(
        <Wrapper>
            { loading 
                ? <DashboardSkeleton /> 
                : <DashboardContent user={user} clearUser={clearUser} updateUser={updateUser} /> 
            }
        </Wrapper>
        
    );
}