var buildBigBag = buildBag(sequentialDomino)
var buildRandomBag = buildBag(randomDomino)

try {

	var begin = new Date().getTime();
	var bigBag = buildBigBag(125000);
	var end = new Date().getTime() - begin;
	console.info("Big Bag Time: " + end + "ms");

	if (end > 200) {
		ShowResults("TOO SLOW :(");
	} else {
		var bags = [
			buildRandomBag(10).add(0,3),
			buildRandomBag(15).add(1,4),
			buildRandomBag(20).add(2,5),
			buildRandomBag(25).add(6,3),
		];
		
		var box = bags.reduce((box, bag) => {
			return box.add(bag);
		}, new Box())

		var results = [
			box.findBag(3,0).includes(bags[0]),
			box.findBag(4,1).includes(bags[1]),
			box.findBag(5,2).includes(bags[2]),
			box.findBag(3,6).includes(bags[3]),
		].reduce((p, c) => {
			if (!p) { return false; }
			return c;
		}, true)

		ShowResults(results);
	}
} catch (err) {

  console.log(err);
  ShowResults(err.message);

}

function sequentialDomino (i) {
	return [i%7,i%7]
}

function randomDomino () {
	return [
		getRandomInt(0, 6),
		getRandomInt(0, 6)
	]
}

function buildBag (dominoCb) {
	return (N) => {
		return Array.apply(null, {length: N})
		.map((n, i) => dominoCb(i))
		.reduce((bag, domino) => {
			return bag.add.apply(bag, domino)
		}, new Bag())
	}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}