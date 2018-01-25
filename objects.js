let playlist = {
  biggie: 'party and bullsh*t',
  red_hot_chili_peppers: 'scar tissue',
  black_sabbath: 'sabbath, bloody sabbath'
};

const updatePlaylist = (playlist, artistName, songTitle) => playlist[artistName] = songTitle

const removeFromPlaylist = (playlist, artistName) => delete playlist[artistName]
