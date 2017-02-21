var playlist = { artistName: "song_title" }

function updatePlaylist(playlist, artistName, song_title) {
  playlist[artistName] = song_title;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
