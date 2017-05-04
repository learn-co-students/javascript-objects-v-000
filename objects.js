var playlist = {Dispatch: "General"}

function updatePlaylist(object, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
