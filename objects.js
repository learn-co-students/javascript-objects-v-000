var playlist = {kanye: 'Slowdive'}

function updatePlaylist(playlist, artistName, song_title) {

  // return Object.assign({}, playlist, {artist_name: song_title})
    playlist[artistName] = song_title

}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
   return playlist;
}
