var playlist = new Object({u2: ["I still haven't found what I'm looking for", "with or without you"]})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
