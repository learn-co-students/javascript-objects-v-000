


var playlist = new Object({artistName: "songTitle"});


function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = "songTitle"

}


function removeFromPlaylist(playlist, artistName) {

  delete playlist[artistName];  //why does delete playlist.artistName per readme fail?

  playlist;

}




