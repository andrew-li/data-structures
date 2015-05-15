var BinarySearchTree = function(value){
  var mytree = {};

  mytree.value = value;
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
  var found = false;

  var helper = function(tree, value){
    if(tree.value === value)
    {
      found = true;
      return;
    }
    else
    {
      if(value < tree.value)
      {
        if(tree.left !== null)
          helper(tree.left, value);
      }
      else
      {
        if(tree.right !== null)
          helper(tree.right, value);
      }
    }
  }

  helper(this, value);

  return found;
};

BSTmethods.depthFirstLog = function(callback){
  callback(this.value);

  console.log(this);

  if(this.left !== null)
    this.left.depthFirstLog(callback);
  if(this.right !== null)
    this.right.depthFirstLog(callback);

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
