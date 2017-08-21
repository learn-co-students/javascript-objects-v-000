var playlist = {Nelly: "I'm giving up and switching to gangsta rap"}


function updatePlaylist(playlist, artistName, songTitle) {

  playlist[artistName] = songTitle
  return playlist

}



function removeFromPlaylist(playlist, artistName) {

  delete playlist[artistName]
  return playlist

}
