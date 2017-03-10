var playlist = {"Carlos Vives" : "Al Filo de Tu Amor"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
