

var Graph = function(){
  this.clusters = {};
  this.clusterCount = 0;
  this.totalNodeCount = 0;
};

var gNode = function(id)
{
  this.id = id;
  this.value;
  this.adjList = {};
  this.adjCount = 0;
};

var Cluster = function(id)
{
  this.id = id;
  this.nodes = {};
  this.nodeCount = 0;
};

Graph.prototype.addNode = function(nodeValue){
  var cCount = this.clusterCount;

  this.clusters[cCount] = new Cluster(cCount);
  this.clusterCount++;

  var cluster = this.clusters[cCount];
  cluster.addNode(nodeValue, this.totalNodeCount);
  this.totalNodeCount++;

};

Cluster.prototype.addNode = function(nodeValue, id){
  var nCount = this.nodeCount;

  this.nodes[nCount] = new gNode(id);
  this.nodeCount++;
  this.nodes[nCount].value = nodeValue;
};

Graph.prototype.contains = function(nodeValue){
  for(var cluster in this.clusters)
  {
    if( this.clusters[cluster].contains(nodeValue) === true)
    {
      return true;
    }
  }

  return false;
};

Graph.prototype.indexOf = function(nodeValue){
  var result = -1;
  for(var cluster in this.clusters)
  {
    result = this.clusters[cluster].indexOf(nodeValue);
    if(result !== -1)
    {
      return result;
    }
  }
  return result;
}

Graph.prototype.indexOfExperiment = function(nodeValue){
  var result = -1;
  for(var cluster in this.clusters)
  {
    result = this.clusters[cluster].indexOf(nodeValue);
    if(result !== -1)
    {
      return {cID : cluster, nID : result};
    }
  }
  return {cID : -1, nID : -1};;
}

Cluster.prototype.indexOf = function(nodeValue){
  for(var node in this.nodes)
  {
    if(this.nodes[node].value === nodeValue)
    {
      return this.nodes[node].id;
    }
  }

  return -1;
};

Cluster.prototype.contains = function(nodeValue){
  return (this.indexOf(nodeValue) !== -1);
};

Graph.prototype.removeNode = function(nodeValue){
  for(var cluster in this.clusters)
  {
    if( this.clusters[cluster].contains(nodeValue) === true)
    {
      this.clusters[cluster].removeNode(nodeValue);
    }
  }
};

//we can optimize this
Cluster.prototype.removeNode = function(nodeValue){
  var nIndex = this.indexOf(nodeValue);

  delete this.nodes[nIndex];
  this.nodeCount--;

  return this.nodeCount;
};

Graph.prototype.hasEdge = function(fromNodeVal, toNodeVal){
  var fromIndex = this.indexOf(fromNodeVal);
  var toIndex = this.indexOf(toNodeVal);

  if(fromIndex !== -1 && toIndex !== -1){
    node.adjCount++
    node.adjList[othernode.id]
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



