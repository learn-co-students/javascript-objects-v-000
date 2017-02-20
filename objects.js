var playlist = {
  'Beyonce': "Drunk in Love",
  'Damien Rice': "I Don't Want to Change You"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
