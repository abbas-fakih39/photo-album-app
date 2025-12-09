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

// Create a new album
function createAlbum(event) {
    event.preventDefault();
    const title = document.getElementById('albumTitle').value;
    const description = document.getElementById('albumDescription').value;
    const newAlbum = {
        id: albums.length + 1,
        title: title,
        description: description,
        userId: currentUser.id,
        createdAt: new Date().toISOString().split('T')[0],
        photoCount: 0
    };
    albums.push(newAlbum);
    displayAlbums();
    hideCreateAlbumForm();
    alert('✅ Album créé avec succès !');
}

// Open an album
function openAlbum(albumId) {
    alert(`Ouverture de l'album ${albumId} - Fonctionnalité à développer plus tard`);
}

// Update an album
function editAlbum(albumId) {
    const album = albums.find(a => a.id === albumId);
    if (album) {
        const newTitle = prompt('Nouveau titre:', album.title);
        if (newTitle) {
            album.title = newTitle;
            displayAlbums();
            alert('✅ Album modifié avec succès !');
        }
    }
}

// Delete an album
function deleteAlbum(albumId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet album ?')) {
        albums = albums.filter(a => a.id !== albumId);
        displayAlbums();
        alert('✅ Album supprimé avec succès !');
    }
}

// Disconnect user
function logout() {
    if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
        window.location.href = 'login.html';
    }
}