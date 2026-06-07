// supabase.js - ENLACE SATELITAL DE CONTROL
const supabaseUrl = 'https://wbcfszivrbuqfqnizarq.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Zzeml2cmJ1cWZxbml6YXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4OTkyMjEsImV4cCI6MjA5NTQ3NTIyMX0.2iX7Twex3d96A9Iawg3zxvGAjFNLBqt81tSZgrzqA9s'; // <-- Pega aquí tu clave anon de Supabase

if (typeof supabase !== 'undefined') {
    window.supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
    console.log("Enlace de Supabase sincronizado en el dominio correcto.");
} else {
    console.error("Error: La librería de internet de Supabase no ha cargado en el HTML.");
}
