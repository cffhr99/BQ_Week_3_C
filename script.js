// Assignment Code
var generateBtn = document.querySelector("#generate");





//create the function to generate a password
function generatePassword(N,min,max,low,up,spec,number){
  //create an array to contain all possible elements for password
  var num = number;
  var low1 = low;
  var capital = up;
  var special = spec;
  //combine 4 arrays into 1 that we need to use
  var config = num.concat(low1).concat(capital).concat(special);


  //create a funtion that ramdom select element from the array
  function getOne(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }

  //create a empty arrary and select one element from each different arrays to
  //make sure our password to use each of them at least once.
  var arr=[];
  if (num.length!=0) {
    arr.push(getOne(num));
  }

  if (low.length!=0) {
    arr.push(getOne(low));
  }
 
  if (capital.length!=0) {
    arr.push(getOne(capital));
  }
 
  if (special.length!=0) {
    arr.push(getOne(special));
  }


  //create the length of our password, which is bewteen (min,max) randomly here is 8-128.
  var len = min + Math.floor(Math.random()*(max-min+1));

  //since arr has initial 4 elements, here select rest elements from config(total array) randomly
  //to get initial password
  for (let i=4-N; i<len; i++){
    arr.push(config[Math.floor(Math.random()*config.length)]);
  }


  //for security, rearrange the initial password randomly
  var randomarr = [];
  for(let i=0; i<len; i++){
    randomarr.push(arr.splice(Math.random()*arr.length,1)[0]);
  }
  // return the new rearranged password for string style
  return randomarr.join('');
}



// Write password to the #password input
function writePassword() {
  //character types to include in the password
  var mins = prompt("Please enter minimal length of password","no less than 8");
  var maxs = prompt("Please enter maximal length of password","no more than 128");
  var min = parseInt(mins,10);
  var max = parseInt(maxs,10);
  var lows = confirm("Contains lowercase letter ?");
  if (lows == true) {
    var low = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  }
  else {
    var low = [];
  }
  var ups = confirm("Contains uppercase leter ?");
  if (ups == true) {
    var up = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  }
  else {
    var up = [];
  }
  var specials = confirm("Contains special characters ?");
  if (specials == true) {
    var spec = ["-","_","#","!","#","$","%","&","(",")","*","+","@"];
  }
  else {
    var spec = [];
  }
  var nums = confirm("Contains numbers ?");
  if (nums == true) {
    var number = ["0","1","2","3","4","5","6","7","8","9"];
  }
  else {
    var number = [];
  }

  let counts = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
  var N = counts([low.length,up.length,spec.length,number.length],0);

  var password = generatePassword(N,min,max,low,up,spec,number);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
