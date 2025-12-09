// Gestion des photos - Backend

// Simuler une base de données de photos
let photos = [];
let photoIdCounter = 1;

// Ajouter une photo à un album
function addPhoto(albumId, userId, photoData) {
    const newPhoto = {
        id: photoIdCounter++,
        albumId: albumId,
        title: photoData.title,
        description: photoData.description || '',
        url: photoData.url || '',
        uploadedAt: new Date().toISOString(),
        uploadedBy: userId,
        likes: 0,
        comments: []
    };
    
    photos.push(newPhoto);
    
    return {
        success: true,
        message: 'Photo ajoutée avec succès',
        photo: newPhoto
    };
}

// Récupérer toutes les photos d'un album
function getPhotosByAlbum(albumId) {
    const albumPhotos = photos.filter(photo => photo.albumId === albumId);
    
    return {
        success: true,
        photos: albumPhotos,
        count: albumPhotos.length
    };
}

// Récupérer une photo spécifique
function getPhotoById(photoId) {
    const photo = photos.find(p => p.id === photoId);
    
    if (photo) {
        return {
            success: true,
            photo: photo
        };
    } else {
        return {
            success: false,
            message: 'Photo non trouvée'
        };
    }
}

// Modifier une photo
function updatePhoto(photoId, userId, updates) {
    const photoIndex = photos.findIndex(p => p.id === photoId && p.uploadedBy === userId);
    
    if (photoIndex !== -1) {
        photos[photoIndex] = {
            ...photos[photoIndex],
            ...updates,
            id: photoId,  // Garder l'ID original
            uploadedBy: userId  // Garder l'uploadedBy original
        };
        
        return {
            success: true,
            message: 'Photo modifiée avec succès',
            photo: photos[photoIndex]
        };
    } else {
        return {
            success: false,
            message: 'Photo non trouvée ou non autorisée'
        };
    }
}

// Supprimer une photo
function deletePhoto(photoId, userId) {
    const photoIndex = photos.findIndex(p => p.id === photoId && p.uploadedBy === userId);
    
    if (photoIndex !== -1) {
        const deletedPhoto = photos.splice(photoIndex, 1)[0];
        
        return {
            success: true,
            message: 'Photo supprimée avec succès',
            photo: deletedPhoto
        };
    } else {
        return {
            success: false,
            message: 'Photo non trouvée ou non autorisée'
        };
    }
}

// Liker une photo
function likePhoto(photoId, userId) {
    const photo = photos.find(p => p.id === photoId);
    
    if (photo) {
        photo.likes = (photo.likes || 0) + 1;
        
        return {
            success: true,
            message: 'Photo likée',
            likes: photo.likes
        };
    } else {
        return {
            success: false,
            message: 'Photo non trouvée'
        };
    }
}

// Rechercher des photos
function searchPhotos(query) {
    const results = photos.filter(photo => 
        photo.title.toLowerCase().includes(query.toLowerCase()) ||
        (photo.description && photo.description.toLowerCase().includes(query.toLowerCase()))
    );
    
    return {
        success: true,
        photos: results,
        count: results.length
    };
}

// Export pour utilisation ultérieure
module.exports = {
    addPhoto,
    getPhotosByAlbum,
    getPhotoById,
    updatePhoto,
    deletePhoto,
    likePhoto,
    searchPhotos
};
 