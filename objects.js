var playlist = {
  'Foo Fighters': 'Everlong'
}

function updatePlaylist(playlist, artistName, songTitle) {
	playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName, songTitle) {
	delete playlist[artistName]
	return playlist
}