
var playlist = {
 'Led Zepplin': 'Whole Lotta Love'
}

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle
 return playlist
}

function remeoveFromPlaylist(playlist, artistName) {
 delete playlist[artistName]
 return playlist
}
