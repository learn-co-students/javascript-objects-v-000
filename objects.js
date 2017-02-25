/* "scripts": {
  "test": "mocha --timeout 5000 -R mocha-multi --reporter-options nyan=-,json=.results.json"
}, */

var playlist = {
  'Led Zeppelin': 'Communication Breakdown'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
