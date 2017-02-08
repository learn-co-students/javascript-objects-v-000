var playlist = {beyonce: "crazy"}

function updatePlaylist(playlist_object, artist, song) {
  playlist_object[artist] = song
  return playlist_object
}

function removeFromPlaylist(obj, artist)  {
  delete obj[artist]
  return obj
}