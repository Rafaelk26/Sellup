import { supabase } from "../../services/db";

interface User {
    id: string;
    email: string;
    password: string;
}

export async function handleLogin(email: string, password: string){
    try {
        const { data, error } = await supabase
        .from('teste')
        .select('*')
    }
    catch(err){
        console.log(err);
        return null;
    }
}