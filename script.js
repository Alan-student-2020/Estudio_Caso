// Simularemos una base de datos de usuarios con un objeto
let users = {};

// Función para registrar un nuevo usuario
function registerUser(username, password) {
    if (users[username]) {
        return { success: false, message: "El usuario ya existe" };
    }
    users[username] = password;
    return { success: true, message: "Usuario registrado exitosamente" };
}

// Función para autenticar un usuario
function authenticateUser(username, password) {
    if (users[username] && users[username] === password) {
        return { success: true, message: "Autenticación exitosa" };
    }
    return { success: false, message: "Usuario o contraseña incorrectos" };
}

// Manejador del formulario de registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const result = registerUser(username, password);
    alert(result.message);
});

// Manejador del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const result = authenticateUser(username, password);
    alert(result.message);
});

// Simulación de un servicio web
async function webService(action, username, password) {
    // En un escenario real, aquí se haría una petición a un servidor
    return new Promise((resolve) => {
        setTimeout(() => {
            if (action === 'register') {
                resolve(registerUser(username, password));
            } else if (action === 'login') {
                resolve(authenticateUser(username, password));
            }
        }, 500); // Simulamos un retraso de 500ms
    });
}

// Ejemplo de uso del servicio web
// webService('register', 'nuevoUsuario', 'contraseña123').then(console.log);
// webService('login', 'nuevoUsuario', 'contraseña123').then(console.log);