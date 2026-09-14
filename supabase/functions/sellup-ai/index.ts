import { createClient } from "@supabase/supabase-js";

Deno.serve(async(req) => {
  try{
    const authHeader = req.headers.get("Authorization");

    if (!authHeader){
      return new Response(
        JSON.stringify({error: "Token de autenticação não informado."}), 
        {status: 401, headers: {"Content-Type": "application/json"}}
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      {
        global: {
          headers: {
            Authorization: authHeader,
          },
        },
      }
    );

    const {data: { user }, error} = await supabase.auth.getUser();

    if (error || !user){
      return new Response(
        JSON.stringify({
          error: "Usuário não autenticado.",
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        user_id: user.id,
        email: user.email,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error){
    console.error(error);

    return new Response(
      JSON.stringify({
        error: "Erro interno da função.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
});