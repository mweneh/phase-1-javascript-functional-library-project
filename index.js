const standardInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  
   function myEach (collection, callback) {
    const newCollection = standardInput(collection);
  
    for (let i = 0; i < newCollection.length; i++) {
      callback(newCollection[i]);
    }
  
    return collection;
  }
  
  function myMap (collection, callback) {
    const newCollection = standardInput(collection);
  
    const newArr = [];
  
    for (let i = 0; i < newCollection.length; i++) {
      newArr.push(callback(newCollection[i]));
    }
  
    return newArr;
  }

 function myReduce (collection, callback, acc) {
    let newCollection = Object.values(collection);
  
    // The if statement below handles the case where no start value is passed in 
    // for the accumulator
    // If acc is null, it is set equal to the first value in newCollection
    // That first value is then sliced out of newCollection since it has already
    // been accounted for
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }