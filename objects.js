var playlist= {
  artist_name: "song_title",
  PlayboiCarti: "Magnolia"
}
Object.assign({}, playlist, {artist_name: "song_title"})


function updatePlaylist(playlist, artist, song){
  playlist[artist]= song;

  return playlist;

}

function removeFromPlaylist(playlist, artist){
  delete playlist[artist];

  return playlist;
}
