var playlist = {
  Selena: "Dreaming of You",
  Selena: "Where Did The Feeling Go"
}

function updatePlaylist(playlist, artistName, songTitle) = {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) = {
delete playlist[artistName]
return playlist
}
