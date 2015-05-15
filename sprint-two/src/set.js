var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(item === undefined)
    return;

  this._storage[item] = item;
};

setPrototype.contains = function(item){
  if(item === undefined)
    return false;

  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  if(item === undefined)
    return;

  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//add: O(1)
//contains: O(1)
//remove: O(1)
