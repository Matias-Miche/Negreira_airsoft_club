// Coloca aquí tus credenciales reales de Supabase
const supabaseUrl = 'https://tu-proyecto.supabase.co';
const supabaseKey = 'tu-clave-anon-publica-de-supabase';

// Esta línea crea el cliente global que usará tu index.html
window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
