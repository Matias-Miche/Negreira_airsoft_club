// supabase.js
const supabaseUrl = 'https://tu-proyecto.supabase.co'; 
const supabaseAnonKey = 'tu-clave-anon-key';

// Asegura que la librería global de Supabase se haya cargado antes de activarla
if (typeof supabase !== 'undefined') {
    window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
    console.log("Enlace de Supabase preparado correctamente.");
} else {
    console.error("Error crítico: La librería CDN de Supabase no ha cargado en el HTML.");
}
