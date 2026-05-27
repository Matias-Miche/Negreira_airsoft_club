# Negreira_airsoft_club
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Club de Airsoft Negreira | Guía de Proyecto</title>
    <style>
        /* --- ESTILOS GENERALES --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        html {
            scroll-behavior: smooth; /* Desplazamiento suave entre apartados */
        }

        body {
            background-color: #1a1a1a;
            color: #ffffff;
            line-height: 1.6;
        }

        /* --- NAVEGACIÓN --- */
        header {
            background-color: #0b0b0b;
            padding: 20px;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            border-bottom: 3px solid #4a5d4e; /* Verde militar */
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #7fa984;
        }

        .nav-links {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        .nav-links a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #7fa984;
        }

        /* --- SECCIONES PRINCIPALES --- */
        section {
            padding: 100px 20px 60px 20px; /* Margen superior para no tapar con el menú fijo */
            max-width: 1000px;
            margin: 0 auto;
            min-height: 80vh;
        }

        h1, h2 {
            color: #7fa984;
            margin-bottom: 20px;
            text-transform: uppercase;
        }

        /* --- SECCIÓN INICIO --- */
        #inicio {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .btn-accion {
            display: inline-block;
            background-color: #4a5d4e;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
            font-weight: bold;
            transition: background 0.3s;
        }

        .btn-accion:hover {
            background-color: #637d68;
        }

        /* --- SECCIÓN REGISTRO (FORMULARIO) --- */
        .form-grupo {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #ccc;
        }

        input[type="text"], input[type="number"] {
            width: 100%;
            padding: 10px;
            background-color: #2b2b2b;
            border: 1px solid #4a5d4e;
            border-radius: 4px;
            color: #fff;
        }

        /* --- PIE DE PÁGINA --- */
        footer {
            background-color: #0b0b0b;
            text-align: center;
            padding: 20px;
            color: #666;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>

    <!-- MENÚ DE NAVEGACIÓN -->
    <header>
        <nav>
            <div class="logo">Airsoft Negreira</div>
            <ul class="nav-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#informacion">El Club</a></li>
                <li><a href="#registro">Inscripción</a></li>
            </ul>
        </nav>
    </header>

    <!-- SECCIÓN 1: INICIO -->
    <section id="inicio">
        <h1>Bienvenidos al Club de Airsoft de Negreira</h1>
        <p>Táctica, estrategia y adrenalina en la comarca de Barcala. Únete a nuestras partidas de fin de semana.</p>
        <!-- Enlace de reenvío al apartado de registro -->
        <a href="registro.html" class="btn-accion">Obtener mi ID de Miembro</a>
    </section>

    <!-- SECCIÓN 2: INFORMACIÓN -->
    <section id="informacion">
        <h2>Sobre el Club</h2>
        <p>Somos una asociación de airsoft con sede en Negreira. Organizamos eventos en entornos naturales controlados y campos autorizados, priorizando siempre la seguridad, el compañerismo y el juego limpio.</p>
        <br>
        <h3>Requisitos para participar:</h3>
        <ul>
            <li>Ser mayor de edad (o disponer de autorización paterna).</li>
            <li>Gafas de protección homologadas de uso obligatorio.</li>
            <li>Cumplir estricto control de potencia (Cronógrafo).</li>
        </ul>
    </section>

    <!-- SECCIÓN 3: REGISTRO (Usa los comandos que pediste antes) -->
    <section id="registro">
        <h2>Registro de Jugadores</h2>
        <p>Si ya eres miembro, introduce tu credencial para verificar tu asistencia a la próxima partida:</p>
        <br>
        <form action="#" method="POST" onsubmit="alert('ID Validado correctamente'); return false;">
            <div class="form-grupo">
                <!-- Comando HTML para que el usuario escriba su ID -->
                <label for="jugador-id">Introduce tu ID de Operador:</label>
                <input type="text" id="jugador-id" name="jugador-id" placeholder="Ej: AN-9823" maxlength="10" required>
            </div>
            <button type="submit" class="btn-accion" style="border:none; cursor:pointer;">Verificar ID</button>
        </form>
    </section>

    <!-- PIE DE PÁGINA -->
    <footer>
        <p>&copy; 2026 Club Airsoft Negreira. Diseñado como proyecto académico ejecutable en GitHub Pages.</p>
    </footer>

</body>
</html>
