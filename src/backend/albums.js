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