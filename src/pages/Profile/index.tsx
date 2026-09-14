import React from "react";
import { UserContext } from "../../context/User";

// Components
import { ProfileContent } from "./components/ProfileContent";
import { ProfileSkeleton } from "./components/ProfileSkeleton";
import { Wrapper } from "../../components/Wrapper";

export default function Profile(){

    const [loading, setLoading] = React.useState<boolean>(true);
    const { user, clearUser } = React.useContext(UserContext);

    // Omite durante 10s o content, depois exibe. (Simulando um skeleton no dashboard)
    React.useEffect(()=> {
        setTimeout(()=> {
            setLoading(false);
        }, 10000);
    }, []);

    return(
        <Wrapper>
            { loading 
                ? <ProfileSkeleton /> 
                : <ProfileContent user={user} clearUser={clearUser} /> 
            }
        </Wrapper>
        
    );
}