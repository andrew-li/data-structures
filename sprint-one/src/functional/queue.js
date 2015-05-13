var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var pushIndex = 0;
  var popIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[pushIndex] = value;
    size++;
    pushIndex++;
  };

  someInstance.dequeue = function(){
    if(size>0){
      var temp = storage[popIndex];
      delete storage[popIndex];
      popIndex++;
      size--;
      return temp;
    }

  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
