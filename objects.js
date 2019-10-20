var playlist = { 'My Bloody Valentine':'Sometimes','Slowdive':'Allison'};
function updatePlaylist(playlist,artistName,songTitle){
playlist[artistName] = songTitle;
return playlist;
  }

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}
