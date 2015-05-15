var BinarySearchTree = function(value){
  var mytree = {};

  mytree.value = 0;
  mytree.right = null;
  mytree.left = null;

  extend(mytree, BSTmethods);
  return mytree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var BSTmethods = {};

BSTmethods.insert = function(value){
  var tree = BinarySearchTree(value);

console.log(tree);

  if(value < this.value)
  {
    (this.left === null) ? (this.left = tree) : this.left.insert(value);
  }
  else
  {
    (this.right === null) ? (this.right = tree) : this.right.insert(value);
  }
};

BSTmethods.contains = function(value){

};

BSTmethods.depthFirstLog = function(callback){

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
