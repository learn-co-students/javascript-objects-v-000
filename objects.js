var playlist={"5sos":"Amnesia"}
function updatePlaylist(playlist, artistName, songTitle)
{
   playlist[artistName]=songTitle;
}
function removeFromPlaylist(playlist, artistName)
{
  delete playlist[artistName];
}
