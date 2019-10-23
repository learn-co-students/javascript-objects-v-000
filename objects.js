var playlist = {
  Christina: "Genie In A Bottle"
}

function updatePlaylist(object, artistName, songTitle) {
  object[artistName] = songTitle
  return object
}

function removeFromPlaylist(object, artistName) {
  delete object[artistName]
  return object
}
