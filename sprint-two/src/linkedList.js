var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail === null){
      list.head = new Node(value);
      list.tail = list.head;
    }
    else{
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    if(list.head === null){
      return null;
    }
    else{
      var temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }
  };

  list.contains = function(target){
    var tempNode = list.head;
    while(tempNode){
      if(tempNode.value === target){
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
