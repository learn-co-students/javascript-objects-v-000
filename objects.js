var playlist = {
  Beyonce: "Drunk in Love",   // Do NOT need single quotes for one-word key
  'Damien Rice': "I Don't Want to Change You"   // DO need single quotes for multiple-word key
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
