//Counting Sheep

function countingSheep(sheeps) {
  //base case
  if (sheeps === 0) {
    return console.log("All sheep jumped over the fence");
  }
  //general case
  console.log(sheeps + ": Another sheep jumps over the fence");
  countingSheep(sheeps - 1);
}

//calling with input = 3
countingSheep(3);
