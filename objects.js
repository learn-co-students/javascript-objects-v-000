var playlist = {
  artist: 'Blondie',
  song: 'Call Me'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist

}

function removeFromPlaylist(plalist, artistName) {
  delete playlist[artistName]
  return playlist
}
