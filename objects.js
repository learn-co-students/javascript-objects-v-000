var playlist = {
  'David Bowie': "Starman",
  'The Band': "Ophelia",
  'Band of Horses': "Is There a Ghost"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}