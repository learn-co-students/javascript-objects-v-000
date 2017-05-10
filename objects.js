var playlist = {
  "The Shins": "New Slang",
  "Tycho": "Receiver",
  "Odesza": "Echoes"
}

function updatePlaylist(somePlaylist, artistName, songTitle) {
  somePlaylist[artistName] = songTitle
  return somePlaylist
}

function removeFromPlaylist(somePlaylist, artistName) {
  delete somePlaylist[artistName]
  return somePlaylist
}
