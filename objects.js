const playlist = [(artistName,songTitle)]


function updatePlaylist = (name) {

  updatePlaylist.artistName.push(name),
  updatePlaylist.songTitle.push(name),
}
return updatePlaylist


function removeFromPlaylist = (name) {

  removeFromPlaylist.artistName.pop(name),
  removeFromPlaylist.songTitle.pop(name),
}
return removeFromPlaylist
