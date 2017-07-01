var playlist = {'Metallica': 'Blackend',
'The Doors': 'The End'}

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist, song) {
  delete playlist[artist]
  return playlist
}
