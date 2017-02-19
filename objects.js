var playlist = { 
  "rolling stones": "can't get no",
  beatles: "shitty love song" 
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist;
}