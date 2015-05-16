//r-b tree spec

describe('redBlackTree', function() {
  var redBlackTree;

  beforeEach(function() {
    redBlackTree = new RedBlackTree();
  });

  it('should have methods named "insert", "find", "contains"', function() {
    expect(redBlackTree.insert).to.be.a("function");
    expect(redBlackTree.find).to.be.a("function");
    expect(redBlackTree.contains).to.be.a("function");
  });


  it('should contain inserted values', function(){
    redBlackTree.insert(2);
    expect(redBlackTree.find(2).value).to.equal(2);
  });

  it('should return null if values is not present', function(){;
    redBlackTree.insert(4);
    expect(redBlackTree.find(5)).to.equal(null);
  });

  it('should return true if values are present', function(){
    redBlackTree.insert(4);
    expect(redBlackTree.contains(4)).to.equal(true);
  });

  it('should return false if values are not present', function(){
    redBlackTree.insert(4);
    expect(redBlackTree.contains(5)).to.equal(false);
  });
});
