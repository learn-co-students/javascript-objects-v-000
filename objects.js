var playlist = {'Artist': 'Song'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName,){
  delete playlist[artistName];
}

//updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
//console.log(playlist['Phil Ochs
