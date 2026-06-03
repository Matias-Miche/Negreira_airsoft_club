// Configuración centralizada de Supabase
const SUPABASE_URL = "https://wbcfszivrbuqfqnizarq.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndiY2Zzeml2cmJ1cWZxbml6YXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4OTkyMjEsImV4cCI6MjA5NTQ3NTIyMX0.2iX7Twex3d96A9Iawg3zxvGAjFNLBqt81tSZgrzqA9s";

if (!window.supabaseClient) {
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}
