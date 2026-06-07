// Variable global para almacenar el ID del usuario autenticado
let usuarioLogueadoId = null;

async function cargarPerfil() {
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    if (!user) {
        window.location.href = "login.html";
        return;
    }
    
    // ASIGNACIÓN CRÍTICA: Guardamos el ID real del usuario logueado en la variable global
    usuarioLogueadoId = user.id;

    const { data, error } = await window.supabaseClient
        .from("jugadores")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

    if (error) {
        document.getElementById("usuario").innerText = "⚠️ Error al conectar con el servidor.";
        return;
    }

    if (!data) {
        document.getElementById("usuario").innerHTML = "<strong>Usuario:</strong> Perfil no inicializado.";
        return;
    }

    // Renderizar datos estáticos en la pantalla
    document.getElementById("usuario").innerHTML = "<strong>Operador:</strong> " + (data.usuario ? data.usuario.toUpperCase() : "Sin nombre");
    document.getElementById("rol").innerHTML = "<strong>Rango del Sistema:</strong> " + (data.rol || "usuario");
    document.getElementById("puntos").innerHTML = "<strong>Puntos Totales:</strong> " + (data.puntos || 0) + " PTS";

    // Pre-seleccionar los desplegables con lo que ya está guardado en la base de datos
    if (data.rol_juego) document.getElementById("selectRolJuego").value = data.rol_juego;
    
    const entradaActual = data.tipo_entrada == 25 ? "25" : "5";
    document.getElementById("selectEntrada").value = entradaActual;

    // Mostrar el panel si es administrador
    if (data.rol === "administración" || data.rol === "administracion") {
        document.getElementById("panelAdmin").innerHTML = `
            <a class="admin-btn" href="admin.html">⚙️ Entrar al Panel de Control General</a>
        `;
    }
}

async function actualizarDatosPerfil() {
    const nuevoRolJuego = document.getElementById("selectRolJuego").value;
    const nuevaEntrada = parseInt(document.getElementById("selectEntrada").value);
    const feedback = document.getElementById("feedback");
    
    // Verificación de seguridad local por si la variable no cargó a tiempo
    if (!usuarioLogueadoId) {
        feedback.innerText = "❌ Error: Sesión de usuario no válida.";
        feedback.style.color = "#ff8a8a";
        return;
    }

    feedback.innerText = "Guardando cambios...";
    feedback.style.color = "white";

    // Enviamos exclusivamente las dos columnas mutables por el usuario común
    const { error } = await window.supabaseClient
        .from("jugadores")
        .update({
            rol_juego: nuevoRolJuego,
            tipo_entrada: nuevaEntrada
        })
        .eq("id", usuarioLogueadoId);

    if (error) {
        console.error("Error al actualizar:", error);
        feedback.innerText = "❌ Error: " + error.message;
        feedback.style.color = "#ff8a8a";
    } else {
        feedback.innerText = "✔️ ¡Perfil actualizado correctamente!";
        feedback.style.color = "#8dc891";
        setTimeout(() => { feedback.innerText = ""; }, 3000);
    }
}

async function cerrarSesion() {
    await window.supabaseClient.auth.signOut();
    window.location.href = "login.html";
}

// Iniciar el proceso en cuanto cargue el DOM
document.addEventListener("DOMContentLoaded", cargarPerfil);
