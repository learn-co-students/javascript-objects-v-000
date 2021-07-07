var playlist = new Object({ Shakira : "Hips Don't Lie"});

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
