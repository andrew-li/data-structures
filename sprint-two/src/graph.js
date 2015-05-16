
var Graph = function(){
  this.adjList = {};
};

Graph.prototype.addNode = function(node){
  this.adjList[node] = {};
};

Graph.prototype.contains = function(node){
  return this.adjList.hasOwnProperty(node);
};

Graph.prototype.removeNode = function(node){
  delete this.adjList[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.adjList[fromNode].hasOwnProperty(toNode)
    && this.adjList[toNode].hasOwnProperty(fromNode);
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.adjList[fromNode][toNode] = true;
  this.adjList[toNode][fromNode] = true;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.adjList[fromNode][toNode];
  delete this.adjList[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for(var node in this.adjList)
  {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 //addNode: O(1)
 //contains: O(1)
 //removeNode: O(1)
 //hasEdge: O(1)
 //addEdge: O(1)
 //removeEdge: O(1)
 //forEachNode: O(n)



