//red-black tree

var RedBlackTree = function() {
  this.root = null;
};


var TreeNode = function(value) {
  this.right = null;
  this.left = null;
  this.parent = null;
  this.value = value;
  this.color = "red";
};

TreeNode.prototype.grandParent = function() {
  return this.parent !== null ? this.parent.parent : null;
};

TreeNode.prototype.uncle = function () {
  var grandParent = this.grandParent();
  if(grandParent !== null){
    return grandParent.left === this.parent ? grandParent.right : grandParent.left;
  }
  return null;
};

//tree node helper functions

TreeNode.prototype.isLeaf = function () {
  return this.parent && this.left.isNullLeaf() && this.right.isNullLeaf();
};

TreeNode.prototype.isNullLeaf = function() {
  return this.parent.isLeaf() && !this.value && this.color === "black";
};

TreeNode.prototype.appendNullLeaves = function() {
  var nullLeaf = new TreeNode(null);
  nullLeaf.color = "black";
  nullLeaf.parent = this;
  if(this.left === null) this.left = nullLeaf;
  if(this.right === null) this.right = nullLeaf;
}

TreeNode.prototype.print = function() {
  var myString = "[" + this.value + " (" + this.color.charAt(0) + ")]"
  return myString;
};

//red black tree helper functions

RedBlackTree.prototype.appendNullLeavesTo = function(node) {
  if(node) {
    node.appendNullLeaves();
  }
}

RedBlackTree.prototype.grandParentOf = function(node) {
  return node !== null ? node.grandParent() : null;
};

RedBlackTree.prototype.uncleOf = function(node) {
  return node !== null ? node.uncle() : null;
};

RedBlackTree.prototype.rotateLeft = function() {
};

RedBlackTree.prototype.rotateRight = function() {
};

//red black tree primary functions

RedBlackTree.prototype.insert = function(value) {
  if(this.root === null) {
    this.root = new TreeNode(value);
    this.root.color = "black";
    this.root.appendNullLeaves();
  }
};

RedBlackTree.prototype.delete = function() {

};

RedBlackTree.prototype.find = function(value) { //return the object
  var node = this.root;
  var nodeToReturn = null;

  var helper = function(node) {
    console.dir(node);
    if(node.value === value) {
      return node;
    }else if(node.value !== null && node.value < value && node.left !== null){
      return helper(node.left);
    }else if(node.value !== null && node.value > value && node.right !== null){
      return helper(node.right);
    }else{
      //console.log("RBT.find.helper else!!!");
      return null;
    }
  };

  if(node) {
    nodeToReturn = helper(node);
  }

  return nodeToReturn;
};

RedBlackTree.prototype.contains = function(value) { //returns true/false
  var node = this.root;
  var found = false;

  var helper = function(node) {
    console.dir(node);
    if(node.value === value) {
      return true;
    }else if(node.value !== null && node.value < value && node.left !== null){
      return helper(node.left);
    }else if(node.value !== null && node.value > value && node.right !== null){
      return helper(node.right);
    }else{
      //console.log("RBT.find.helper else!!!");
      return false;
    }
  };

  if(node) {
    found = helper(node);
  }

  return found;
};

RedBlackTree.prototype.print = function() {

};
