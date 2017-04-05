playlist = { childish: "3005"}

function updatePlaylist(playlist, artist, song) {
  Object.assign(playlist, { [artist]: song })
}

function removeFromPlaylist(list, artist) {
  delete list[artist];
}