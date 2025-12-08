// Système d'authentification basique
// Pour le projet Git, pas besoin de vrai backend

const users = [
    { id: 1, username: 'personne1', password: 'pass1', role: 'admin' },
    { id: 2, username: 'personne2', password: 'pass2', role: 'user' },
    { id: 3, username: 'personne3', password: 'pass3', role: 'user' }
];

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        return {
            success: true,
            message: 'Connexion réussie',
            user: { id: user.id, username: user.username, role: user.role }
        };
    } else {
        return {
            success: false,
            message: 'Identifiants incorrects'
        };
    }
}

function logout() {
    return { success: true, message: 'Déconnexion réussie' };
}

// Export pour utilisation ultérieure
module.exports = { login, logout };