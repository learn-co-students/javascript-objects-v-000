var playlist = {
'Eiffel 65': 'Blue',
'Nirvana': 'Come as you are'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
