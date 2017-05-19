var playlist = {
  mybloodyvalentine: "Sometimes",
  slowdive: "Alison"
}

function updatePlaylist(playList, artistName, songTitle) {
  playlist[artistName] = songTitle
  return
}

function removeFromPlaylist(playList, artistName) {

  delete playlist.Slowdive

  return playlist
}
