var playlist = {
  The_Lumineers: 'Ophelia',
  Of_Monsters_and_Men: 'Little Talks'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
