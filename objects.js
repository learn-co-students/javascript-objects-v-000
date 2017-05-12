var playlist = {Slowdive: 'Alison'};

function updatePlaylist(playlist, artist, songtitle){

playlist[artist] = songtitle;
return playlist;

}

function removeFromPlaylist(playlist, artist) {

  delete playlist[artist];

  return playlist;

}
