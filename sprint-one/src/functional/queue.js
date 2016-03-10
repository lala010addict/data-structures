var Queue = function() {
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};

    // Implement the methods below

    var count = 0;
    someInstance.enqueue = function() {
        count++;
    };

    someInstance.dequeue = function() {
        count--;
    };

    someInstance.size = function() {
        if (count < 0) {
            return 0;
        }
        return count;
    };

    return someInstance;
};
