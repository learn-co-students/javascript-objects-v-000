var playlist = { "beyonce": "all night" };  

var updatePlaylist = function(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle; 
}

var removeFromPlaylist = function(playlist, artistName) {
  delete playlist[artistName]; 
}
