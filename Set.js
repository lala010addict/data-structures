var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;

  set._storage = {};
    return set;
};

var setPrototype = {};

setPrototype.add = function(item){

  this._storage[item] = true;
  };

setPrototype.contains = function(item){

  return !!this._storage[item];
  };

setPrototype.remove = function(item){

  delete this._storage[item];
  };