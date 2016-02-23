var Stack = function() {
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};

    // Implement the methods below

    someInstance.push = function(value) {
        someInstance.size();
    };

    someInstance.pop = function() {
      count--;
    };

    var count = 0;
    someInstance.size = function() {
            count++;
        return count-1;

    };

    return someInstance;
};
