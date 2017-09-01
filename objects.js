var playlist = {artist: 'song'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  //delete keyvalue pair from playlist return updated playlist
  delete playlist[artistName]

  return playlist
}
