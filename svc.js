module.exports = {
  list: function() {
    return list;
  },
  detail: function(id) {
    return list[id];
  },
  create: function(obj) {
    obj.id = counter++;
    console.log(obj);
    list.push(obj);
    return {id: obj.id};
  },
  remove: function(id) {
    list = list.filter((obj) => {
      return obj.id != id;
    });
    return {};
  }
};

var counter = 4;
var list = [
  {id : 1, title: 'HTML', description: 'Hyper Text Markup Language'},
  {id : 2, title: 'CCS', description: 'Cascading Style Sheet'},
  {id : 3, title: 'JS', description: 'Javascript'}
];
