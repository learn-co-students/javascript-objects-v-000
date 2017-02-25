var playlist = {
  'Danny': 'Song',
  'Beyonce': 'Hold Up'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}