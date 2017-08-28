var playlist = {
  artistName: "adele"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = artistName,
  playlist[songTitle] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
