var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.childCount = 0;

  // your code here
  newTree.children = {};
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children[this.childCount] = new Tree(value);
  this.childCount++;
};

treeMethods.contains = function(target){

  var found = false;
  var recursiveContains = function(tree, target){
    if(found === true)
      return;

    if(tree.value === target){
      found = true;
    }
    for(var child in tree.children){
      recursiveContains(tree.children[child], target);
    }
  };

  recursiveContains(this, target);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
//.addchild() = O(1)
//.contains() = O(n)
