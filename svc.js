module.exports = {
  list: function() {
    return Object.keys(map).map((key) => map[key]);
  },
  detail: function(id) {
    return map[id];
  },
  create: function(obj) {
    obj.id = counter++;
    console.log(obj);
    map[obj.id] = obj;
    return {id: obj.id};
  },
  remove: function(id) {
    delete map[id];
    return {};
  },
  modify: function(obj) {
    map[obj.id] = obj;
    return map[obj.id];
  }
};

var counter = 4;
var map = {
  1: {id : 1, title: 'HTML', description: 'Hyper Text Markup Language'},
  2: {id : 2, title: 'CCS', description: 'Cascading Style Sheet'},
  3: {id : 3, title: 'JS', description: 'Javascript'}
};
