var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var insertObject = { k : v };
  var insertArray = [];
  //insertObject[k] = v;

  if(retrieve) //no collision
  {
    this._storage.set(i, v);
  }
  else if()
  {

  }
  else //collision
  {

  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //insert: O(1)
 //retrieve: O(1)
 //remove: O(1)
