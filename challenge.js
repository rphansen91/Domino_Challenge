/**
  * OBJECTIVES
  * 
  * Every implementation should be **Efficient**
  * 
  * 1. Create A Domino 
  *     - A domino has two values
  *     - Values are [0-6] inclusive
  *     - They can be the same value
  * 2. Create A Bag
  *     - Dominos can be added to the bag
  *     - The bag can hold an "infinite" ammount of these dominos
  *     - Should be able to find out how many of a certain domino are in a bag
  * 3. Create A Box
  *     - Bags should be able to be added to the box
  *     - We should be able to retrieve a bag that holds a domino we ask for
  */

// TEST CASE

try {

  var bag1 = new Bag().add(0,6).add(0,4).add(3,4);
  var bag2 = new Bag().add(0,2).add(1,1).add(3,3);

  var box = new Box().add(bag1).add(bag2);

  var retrievedBag = box.findBag(2,0)[0];
  ShowResults(retrievedBag === bag2);

} catch (err) {

  console.log(err);
  ShowResults(false);

}