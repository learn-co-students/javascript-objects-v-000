const artist = 'Black Keys'
var playlist = {[artist]: 'Black Mud'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
  return obj;
}
