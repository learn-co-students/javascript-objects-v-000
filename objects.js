var playlist = {
  beatles: 'let it be'
};

function updatePlaylist(list, name, title){
  list[name] = name;
  list[title] = title;
}

function removeFromPlaylist(list, name){
  delete list[name];
}