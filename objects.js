var playlist = { artistName: "song_title" }
var list = {}

function updatePlaylist(playlist, artistName, song_title) {
	playlist[artistName] = song_title;
	return playlist;
}

function updatelist(list, artistName, song_title) {
	list[artistName] = song_title;
	return list;
}

function removeFromPlaylist(playlist, artistName) {
	delete playlist[artistName]
	return playlist;
}
