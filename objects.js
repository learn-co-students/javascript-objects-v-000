var playlist = {'pink floyd': 'set the controls for the heart and the sun'};

function updatePlaylist(playlistObject, artistName, songTitle) {
 playlist[artistName] = songTitle
 return playlist  
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}