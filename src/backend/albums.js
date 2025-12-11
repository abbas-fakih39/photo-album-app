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