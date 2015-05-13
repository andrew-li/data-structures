var Stack = function() {

  // Use an object with numeric keys to store values
  this.storage = {};
  this.sizep = 0;

};

// Implement the methods below
Stack.prototype.push = function(value){
  this.storage[this.sizep] = value;
  ++this.sizep;
};

Stack.prototype.pop = function(){
  if(this.sizep >= 1)
  {
    var temp = this.storage[this.sizep - 1];
    delete this.storage[this.sizep - 1];
    --this.sizep;
    return temp;
  }

  return undefined;
};

Stack.prototype.size = function(){
  return this.sizep;
};




