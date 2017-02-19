var playlist = {
  lilyKershaw: ['Maybe'],
  brunoMars: ['Uptown Funk']
};

var updatePlaylist = function(playlist, newArtist, newSongs){
  playlist[newArtist] = newSongs
  return playlist
}

var removeFromPlaylist = function(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
