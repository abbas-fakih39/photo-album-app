// Simulate a database
let albums = [];
let albumIdCounter = 1;
 
// Create a new album
function createAlbum(userId, title, description) {
    const newAlbum = {
        id: albumIdCounter++,
        userId: userId,
        title: title,
        description: description,
        createdAt: new Date().toISOString(),
        photoCount: 0
    };
    albums.push(newAlbum);
    
    return {
        success: true,
        message: 'Album créé avec succès',
        album: newAlbum
    };
}

// Get albums by user
function getAlbumsByUser(userId) {
    const userAlbums = albums.filter(album => album.userId === userId);
    return {
        success: true,
        albums: userAlbums
    };
}
 
// Get album by ID
function getAlbumById(albumId) {
    const album = albums.find(a => a.id === albumId);
    if (album) {
        return {
            success: true,
            album: album
        };
    } else {
        return {
            success: false,
            message: 'Album non trouvé'
        };
    }
}

// Update an album
function updateAlbum(albumId, userId, updates) {
    const albumIndex = albums.findIndex(a => a.id === albumId && a.userId === userId);
    if (albumIndex !== -1) {
        albums[albumIndex] = {
            ...albums[albumIndex],
            ...updates,
            id: albumId,  // Garder l'ID original
            userId: userId  // Garder l'userId original
        };
        return {
            success: true,
            message: 'Album modifié avec succès',
            album: albums[albumIndex]
        };
    } else {
        return {
            success: false,
            message: 'Album non trouvé ou non autorisé'
        };
    }
}
 
// Delete an album
function deleteAlbum(albumId, userId) {
    const albumIndex = albums.findIndex(a => a.id === albumId && a.userId === userId);
    if (albumIndex !== -1) {
        albums.splice(albumIndex, 1);
        return {
            success: true,
            message: 'Album supprimé avec succès'
        };
    } else {
        return {
            success: false,
            message: 'Album non trouvé ou non autorisé'
        };
    }
}
 
// Export functions for use in other modules
module.exports = {
    createAlbum,
    getAlbumsByUser,
    getAlbumById,
    updateAlbum,
    deleteAlbum
};