var playlist = { ['Young Thug']: 'Best friend',
Biggie: 'Juicy'}

function updatePlaylist(playlist, artistName, songTitle)
{
   playlist[artistName] = songTitle
   return playlist

}

function removeFromPlaylist(playlist, artistName){
  delete playlist.Slowdive

  playlist

}
