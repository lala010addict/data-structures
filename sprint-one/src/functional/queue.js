var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

var count;
  someInstance.enqueue = function(value){
    count++
  };

  someInstance.dequeue = function(){
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
