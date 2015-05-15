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

  list.update = function(target, value)
  {
    var tempNode = list.head;
    while(tempNode){
      if(tempNode.value === target){
        tempNode.value = value;
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
  }

  list.updateUsingKey = function(key, obj)
  {
    var tempNode = list.head;
    while(tempNode){
      if(tempNode.value.hasOwnProperty(key) === true){
        tempNode.value = obj;
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
  }

  list.deleteUsingKey = function(key)
  {
    var tempNode = list.head;
    var prevNode = null;
    while(tempNode){
      if(tempNode.value.hasOwnProperty(key) === true){
        if(tempNode === list.head){
          list.head = tempNode.next;
        }
        if(tempNode === list.tail){
          list.tail = prevNode;
        }
        if(prevNode !== null){ //checks if LL is empty
          prevNode.next = tempNode.next;
        }
        return true;
      }
      prevNode = tempNode;
      tempNode = tempNode.next;
    }
    return false;
  }

  list.findByKey = function(key)
  {
    var tempNode = list.head;
    while(tempNode){
      if(tempNode.value.hasOwnProperty(key) === true){
        return tempNode.value[key];
      }
      tempNode = tempNode.next;
    }
    return null;
  }

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
//.addToTail = O(1)
//.removeHead = O(1)
//.contains = O(n)
