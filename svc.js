module.exports = {
  list: function() {
    return list;
  },
  detail: function(id) {
    return list[id];
  }
};

var list = [
  {id : 1, title: 'HTML', description: 'Hyper Text Markup Language'},
  {id : 2, title: 'CCS', description: 'Cascading Style Sheet'},
  {id : 3, title: 'JS', description: 'Javascript'}
];
