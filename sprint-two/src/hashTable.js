var HashTable = function(){
  this._limit = 8;
  this._minSize = 4;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage.get(i) === undefined
    || this._storage.get(i) === null) //no collision
  {
    var insertList = LinkedList();
    var objToInsert = {};
    objToInsert[k] = v;
    this._storage.set(i, insertList);
    this._storage.get(i).addToTail(objToInsert);
  }
  else //there is a collision
  {
    if(this._storage.get(i).updateUsingKey(k, {k : v}) === false)
    {
      var objToInsert = {};
      objToInsert[k] = v;
      this._storage.get(i).addToTail(objToInsert);
    }
  }
  this._count++;
  this.mapToNewStorage("insert");
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined || this._storage.get(i) === null)
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
    this._storage.set(i, undefined);
  }

  if(removed === true)
  {
    this._count--;
    this.mapToNewStorage("remove");
  }

  return removed;
};

HashTable.prototype.mapToNewStorage = function(action){
  var flag = null;

  if(action === "insert" && this._count >= this._limit * 0.75){
    flag = "double";
    this._limit *= 2;
  }else if(action === "remove" && this._count < this._limit * 0.25
      && this._limit / 2 >= this._minSize){
    flag = "shrink";
    this._limit /= 2;
  }

  if(flag !== null)
  {
    // update the size of hash table

    var tempStorage = LimitedArray(this._limit);
    var tempThis = this;
    // look for every existing house in the city
    this._storage.each(function(item, index, collection) {
      if(item !== undefined)
      {
        var temp = item.head;
        // for every person in the house
        while(temp !== null)
        {
          var k = Object.keys(temp.value)[0];
          var v = temp.value[k];

          // get the new index for that person
          var i = getIndexBelowMaxForKey(k, tempThis._limit);

          // insert the person to the new storage (handle collisions!!!)
          // if house is empty (no possible collision)
          if(tempStorage.get(i) === undefined
            || tempStorage.get(i) === null) //no collision
          {
            var insertList = LinkedList();
            var objToInsert = {};
            objToInsert[k] = v;
            tempStorage.set(i, insertList);
            tempStorage.get(i).addToTail(objToInsert);
          }
          // else house is not empty (collision!!!)
          // handle collision by adding it to the tail of LL
          else //there is a collision
          {
            if(tempStorage.get(i).updateUsingKey(k, {k : v}) === false)
            {
              var objToInsert = {};
              objToInsert[k] = v;
              tempStorage.get(i).addToTail(objToInsert);
            }
          }

          temp = temp.next;
        }
      }
    });
    // assign tempStorage as the new storage of the hash table
    this._storage = tempStorage;
  }
};

HashTable.prototype.mapToNewStorageBackUp = function(){
  if(this._count >= this._limit * 0.75)
  {
    // update the size of hash table
    this._limit *= 2;

    var tempStorage = LimitedArray(this._limit);

    // look for every existing house in the city
    this._storage.each(function(item, index, collection) {
      if(item !== undefined)
      {
        var temp = item.head;
        // for every person in the house
        while(temp !== null)
        {
          var k = Object.keys(temp.value)[0];
          var v = temp[k];

          // get the new index for that person
          var i = getIndexBelowMaxForKey(k, this._limit);

          // insert the person to the new storage (handle collisions!!!)
          // if house is empty (no possible collision)
          if(tempStorage.get(i) === undefined
            || tempStorage.get(i) === null) //no collision
          {
            var insertList = LinkedList();
            var objToInsert = {};
            objToInsert[k] = v;
            tempStorage.set(i, insertList);
            tempStorage.get(i).addToTail(objToInsert);
          }
          // else house is not empty (collision!!!)
          // handle collision by adding it to the tail of LL
          else //there is a collision
          {
            if(tempStorage.get(i).updateUsingKey(k, {k : v}) === false)
            {
              var objToInsert = {};
              objToInsert[k] = v;
              tempStorage.get(i).addToTail(objToInsert);
            }
          }

          temp = temp.next;
        }
      }
    });
    // assign tempStorage as the new storage of the hash table
    this._storage = tempStorage;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
 //insert: O(1)
 //retrieve: O(1)
 //remove: O(1)
