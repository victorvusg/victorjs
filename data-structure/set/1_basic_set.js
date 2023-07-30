const cloSet = new Set();

cloSet.add(199);
cloSet.add('a');
cloSet.add((test) => console.log(test));

console.log(cloSet.keys);
