//Counting Sheep

function countingSheep(sheeps) {
  //base case
  if (sheeps === 0) return "All sheep jumped over the fence";
  //general case
  return (
    `${sheeps}: Another sheep jumps over the fence\n` +
    countingSheep(sheeps - 1)
  );
}

//calling with input = 3
console.log(countingSheep(3));
