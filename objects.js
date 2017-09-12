var playlist = new Object();

playlist.Kanye = 'school spirit';

function updatePlaylist(playlist,artistName,songTitle){
   playlist[artistName] = songTitle
   return playlist
}

console.log(updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi"));

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist
}
