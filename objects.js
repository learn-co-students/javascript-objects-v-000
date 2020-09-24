var playlist = {
  'Fall Out boy': 'sugar we\'re goin down',
  Journey: 'don\'t stop believing'
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;

  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];

  return playlist;
}
