//Reverse String

function reverseString(str) {
  //base case
  if (str.length === 1) return str[0];
  //general case
  return (
    str.slice(str.length - 1) + reverseString(str.substring(0, str.length - 1))
  );
}

console.log(reverseString("hello"));
