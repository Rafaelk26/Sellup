// Database
import { supabase } from "../../../services/db";

export async function getProfile(userId: string){
  try {
    const { data, error } = await supabase
    .from("profiles")
    .select("id, name, email, subscription_id")
    .eq("id", userId)
    .single();

    if (error) {
      console.log("Erro ao buscar profile:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.log("Erro inesperado ao buscar profile:", error);
    return null;
  }
}