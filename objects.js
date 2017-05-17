var playlist = {
  artist: 'Phil Ochs'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'Phil Ochs';
  playlist[songTitle] = 'My Bloody Valentine';
  return playlist
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
