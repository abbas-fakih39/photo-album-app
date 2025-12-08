// Simulation of datas
let albums = [];
let currentUser = { id: 1, username: 'personne2' };

// Load albums on startup
window.addEventListener('load', function () {
    document.getElementById('username').textContent = `Bienvenue, ${currentUser.username}`;
    loadAlbums();
});

// Show create album form
function showCreateAlbumForm() {
    document.getElementById('createAlbumForm').style.display = 'block';
}

// Hide create album form
function hideCreateAlbumForm() {
    document.getElementById('createAlbumForm').style.display = 'none';
    document.getElementById('albumTitle').value = '';
    document.getElementById('albumDescription').value = '';
}