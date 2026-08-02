import { supabaseBrowser } from "@/lib/supabase-browser";


export async function signIn(
  email: string,
  password: string
) {

  return supabaseBrowser.auth.signInWithPassword({
    email,
    password,
  });

}


export async function signOut() {

  return supabaseBrowser.auth.signOut();

}


export async function getUser() {

  return supabaseBrowser.auth.getUser();

}