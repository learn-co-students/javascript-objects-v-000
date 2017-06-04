var playlist = { outkast: "roses", iprevail: "chaos", theused: "pretty handsome awkward"}

function updatePlaylist(playlist, artist, song){

  playlist[artist] = song
}

function removeFromPlaylist(playlist, artist){

  delete playlist[artist]

}
