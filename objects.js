var playlist = {"Ty Segal": "My Sunshine"};

function updatePlaylist(playlist, artistName, songTitle){
	playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
	delete playlist[artistName];
	return playlist;
}

