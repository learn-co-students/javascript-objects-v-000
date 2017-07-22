var playlist = {"Elliott Smith": "Between the Bars", "Tool": "Undertow", "Richard Buckner": "Surprise, AZ", "Jason Isbell": "Chaos and Clothes"};

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
    return playlist
}

function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName]
    return playlist
}

