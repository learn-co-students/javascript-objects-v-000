var playlist = {
  atg: "gravity"
}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}
