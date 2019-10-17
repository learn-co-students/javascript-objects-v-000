const playlist = {'Bobbie Gentry': 'Fancy','Neil Young': 'Old Man'};

 function updatePlaylist(playlist, artist, song) {
   playlist[artist] = song;
   return playlist;
 }

 function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
 }
