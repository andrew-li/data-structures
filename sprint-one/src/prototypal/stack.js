var Stack = function() {
 var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.sizep = 0;

  return someInstance;
};

var stackMethods = {};

// Implement the methods below
stackMethods.push = function(value){
  this.storage[this.sizep] = value;
  ++this.sizep;
};

stackMethods.pop = function(){
  if(this.sizep >= 1)
  {
    var temp = this.storage[this.sizep - 1];
    delete this.storage[this.sizep - 1];
    --this.sizep;
    return temp;
  }

  return undefined;
};

stackMethods.size = function(){
  return this.sizep;
};


