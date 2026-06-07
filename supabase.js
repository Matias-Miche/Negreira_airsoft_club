// supabase.js - ENLACE SATELITAL DE CONTROL
const supabaseUrl = 'https://wbcfszivrbuqfqnizarq.supabase.co'; 
const supabaseAnonKey = 'TU_CLAVE_ANON_PUBLIC_REAL_AQUÍ'; // <-- Pega aquí tu clave anon de Supabase

if (typeof supabase !== 'undefined') {
    window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
    console.log("Enlace de Supabase sincronizado en el dominio correcto.");
} else {
    console.error("Error: La librería de internet de Supabase no ha cargado en el HTML.");
}
