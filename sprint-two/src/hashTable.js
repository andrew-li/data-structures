var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(i) !== null) //no collision
  {
    var insertList = LinkedList();
    var objToInsert = {};
    objToInsert[k] = v;
    //insertList.addToTail(objToInsert);
    this._storage.set(i, insertList);
    this._storage.get(i).addToTail(objToInsert);
  }
  else //there is a collision
  {
    if(this._storage.get(i).updateUsingKey(k, {k : v}) === false)
    {
      var objToInsert = {};
      objToInsert[k] = v;
      //insertList.addToTail(objToInsert); //old code
      this._storage.get(i).addToTail(objToInsert); //trying to debug
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === null)
    return null;
  return this._storage.get(i).findByKey(k);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var removed = this._storage.get(i).deleteUsingKey(k);

  if(removed === true
    && this._storage.get(i)["head"] === null
    && this._storage.get(i)["tail"] === null)
  {
    this._storage.set(i, null);
  }

  return removed;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //insert: O(1)
 //retrieve: O(1)
 //remove: O(1)
