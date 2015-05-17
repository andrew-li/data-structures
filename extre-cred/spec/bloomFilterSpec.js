//bloomFilterSpec.js
// visualization: https://www.cs.usfca.edu/~galles/visualization/Algorithms.html

describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter();
  });

  it('should return false if values are not present', function(){
    bloomFilter.insert("abc");
    expect(bloomFilter.contains("cba")).to.equal(false);
  });

  it('should retrieve mix of values that are present', function(){
    var inserted = [];
    var notInserted = [];
    var falsePositives = 0;

    var insertCount = 10;
    var notInsertCount = 100;

    for(var i=0; i<insertCount; i++){
      var randInput = (Math.random()+1).toString(36).substring(7);
      inserted[i] = randInput;
      bloomFilter.insert(randInput);
    }
    while(notInserted.length <= notInsertCount){
      var randInput = (Math.random()+1).toString(36).substring(7);
      if(inserted.indexOf(randInput) <= -1){
        notInserted[notInserted.length] = randInput;
      }
    }
    //later check 10000 times, report false positives
    for(var i=0; i<notInsertCount+insertCount; i++){
      if(i < insertCount){
        //bloomFilter.contains(inserted[i]);
      } else {
        if(bloomFilter.contains(notInserted[i-insertCount])) falsePositives++;
      }
    }
    var trials = (notInsertCount+insertCount).toFixed(4);
    var k = (bloomFilter.k).toFixed(4);
    var expected = (Math.pow(1.0 - Math.pow(2.718281, (-1.0*k*insertCount/18.0)), k) ) ;
    var falsePositiveRate = falsePositives / trials;
    var withinRange = expected + 0.15 > falsePositiveRate && expected - 0.15 < falsePositiveRate;
    console.info("expected: " + expected);
    console.info("actual: " + falsePositiveRate);
    console.info("delta: " + Math.abs(falsePositiveRate - expected));
    expect(withinRange).to.equal(true);
  });
});
