const _ = require('lodash');
const data = [{name: 'Shannon', content: "this is shannon's content", id: 1}, {name: 'Blanca', content: "this is Blanca's content", id: 2}];

module.exports = { add: add, list: list, find: find };

function add (name, content) {
    data.push({ name: name, content: content, id: data.length + 1 + ''});
  }

  function list () {
    return _.cloneDeep(data);
  }

  function find (properties) {
    return _.cloneDeep(_.filter(data, properties));
  }

  //FOR TEST PURPOSES:

  const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + ' ' + randArrayEl(fakeLasts);
  };

  const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return 'Fullstack Academy is ' + randArrayEl(awesome_adj) + '! The instructors are just so ' + randArrayEl(awesome_adj) + '. #fullstacklove #codedreams';
  };

  for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
  }

 // console.log(module.exports.find({name: 'Shannon'}));

  //console.log(module.exports.list());

  //console.log(data);