// Simulation de données
let photos = [];
let currentAlbum = { id: 1, title: 'Vacances été 2024' };
let currentUser = { id: 1, username: 'personne3' };
let photoIdCounter = 1;

// Charger les photos au démarrage
window.addEventListener('load', function() {
    document.getElementById('username').textContent = `Bienvenue, ${currentUser.username}`;
    document.getElementById('albumName').textContent = currentAlbum.title;
    document.getElementById('pageTitle').textContent = `Photos de "${currentAlbum.title}"`;
    loadPhotos();
});

// Charger les photos
function loadPhotos() {
    // Simulation - photos de démonstration
    photos = [
        {
            id: 1,
            albumId: currentAlbum.id,
            title: 'Coucher de soleil',
            description: 'Magnifique coucher de soleil sur la plage',
            url: '',
            uploadedAt: '2024-06-20',
            uploadedBy: currentUser.id
        },
        {
            id: 2,
            albumId: currentAlbum.id,
            title: 'Paysage montagne',
            description: 'Vue panoramique des montagnes',
            url: '',
            uploadedAt: '2024-06-21',
            uploadedBy: currentUser.id
        }
    ];
    
    photoIdCounter = photos.length + 1;
    displayPhotos();
}

// Afficher les photos
function displayPhotos() {
    const photosList = document.getElementById('photosList');
    const noPhotos = document.getElementById('noPhotos');
    
    const albumPhotos = photos.filter(p => p.albumId === currentAlbum.id);
    
    if (albumPhotos.length === 0) {
        photosList.style.display = 'none';
        noPhotos.style.display = 'block';
    } else {
        photosList.style.display = 'grid';
        noPhotos.style.display = 'none';
        
        photosList.innerHTML = albumPhotos.map(photo => `
            <div class="photo-card">
                <div class="photo-image">
                    ${photo.url ? `<img src="${photo.url}" alt="${photo.title}" style="width: 100%; height: 100%; object-fit: cover;">` : '🖼️'}
                </div>
                <div class="photo-content">
                    <h3 class="photo-title">${photo.title}</h3>
                    <p class="photo-description">${photo.description || 'Aucune description'}</p>
                    <div class="photo-info">
                        📅 ${new Date(photo.uploadedAt).toLocaleDateString('fr-FR')}
                    </div>
                    <div class="photo-actions">
                        <button class="btn-primary" onclick="viewPhoto(${photo.id})">Voir</button>
                        <button class="btn-secondary" onclick="editPhoto(${photo.id})">Modifier</button>
                        <button class="btn-danger" onclick="deletePhoto(${photo.id})">Supprimer</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Afficher le modal d'ajout de photo
function showAddPhotoModal() {
    document.getElementById('addPhotoModal').style.display = 'flex';
}

// Fermer le modal d'ajout de photo
function closeAddPhotoModal() {
    document.getElementById('addPhotoModal').style.display = 'none';
    document.getElementById('photoTitle').value = '';
    document.getElementById('photoDescription').value = '';
    document.getElementById('photoUrl').value = '';
}

// Ajouter une photo
function addPhoto(event) {
    event.preventDefault();
    
    const title = document.getElementById('photoTitle').value;
    const description = document.getElementById('photoDescription').value;
    const url = document.getElementById('photoUrl').value;
    
    const newPhoto = {
        id: photoIdCounter++,
        albumId: currentAlbum.id,
        title: title,
        description: description,
        url: url,
        uploadedAt: new Date().toISOString().split('T')[0],
        uploadedBy: currentUser.id
    };
    
    photos.push(newPhoto);
    displayPhotos();
    closeAddPhotoModal();
    
    alert('✅ Photo ajoutée avec succès !');
}

// Voir une photo
function viewPhoto(photoId) {
    const photo = photos.find(p => p.id === photoId);
    if (photo) {
        alert(`📷 ${photo.title}\n\n${photo.description || 'Aucune description'}\n\nAjoutée le ${new Date(photo.uploadedAt).toLocaleDateString('fr-FR')}`);
    }
}

// Modifier une photo
function editPhoto(photoId) {
    const photo = photos.find(p => p.id === photoId);
    if (photo) {
        const newTitle = prompt('Nouveau titre:', photo.title);
        if (newTitle) {
            photo.title = newTitle;
            const newDescription = prompt('Nouvelle description:', photo.description);
            if (newDescription !== null) {
                photo.description = newDescription;
            }
            displayPhotos();
            alert('✅ Photo modifiée avec succès !');
        }
    }
}

// Supprimer une photo
function deletePhoto(photoId) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette photo ?')) {
        photos = photos.filter(p => p.id !== photoId);
        displayPhotos();
        alert('✅ Photo supprimée avec succès !');
    }
}

// Déconnexion
function logout() {
    if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
        window.location.href = 'login.html';
    }
}
 