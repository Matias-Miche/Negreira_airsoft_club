// supabase.js
const supabaseUrl = 'https://tu-proyecto.supabase.co'; // Reemplaza con tu URL real
const supabaseAnonKey = 'tu-clave-anon-key-de-supabase'; // Reemplaza con tu clave API real

// Esto asigna el cliente a la ventana global para que index.html pueda usarlo
window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
