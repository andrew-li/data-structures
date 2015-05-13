var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.sizep = 0;
  someInstance.pushIndex = 0;
  someInstance.popIndex = 0;

  extend(someInstance, queueMethods);

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

  // Implement the methods below

  queueMethods.enqueue = function(value){
    this.storage[this.pushIndex] = value;
    this.sizep++;
    this.pushIndex++;
  };

  queueMethods.dequeue = function(){
    if(this.sizep>0){
      var temp = this.storage[this.popIndex];
      delete this.storage[this.popIndex];
      this.popIndex++;
      this.sizep--;
      return temp;
    }

  };

  queueMethods.size = function(){
    return this.sizep;
  };

