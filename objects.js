var playlist = {
  "Artist Name 1": "Song Title 1",
  "Artist Name 2": "Song Title 2"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
