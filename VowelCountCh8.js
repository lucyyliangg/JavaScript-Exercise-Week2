const str = prompt("Enter a word");
const upperCase = [];
const lowerCase = [];
const vowels = ["A", "E", "I", "O", "U", "Y"];
const vowelsInStr = [];

console.log("Length: " +str.length);

for(let i =0; i< str.length; i++){
  if(str[i] === str[i].toUpperCase())
    upperCase.push(str[i]);
}

for(let i =0; i< str.length; i++){
  if(str[i] === str[i].toLowerCase())
    lowerCase.push(str[i]);
}

for(let i =0; i< str.length; i++){
  for(let x=0; x< vowels.length; x++){
    if(str[i].toUpperCase() === vowels[x]){
      vowelsInStr.push(str[i]);
    }
  }
}

console.log("Upper Case Letters: ")
for(let i =0; i< upperCase.length; i++){
  console.log(upperCase[i]);
}

console.log("Lower Case Letters: ")
for(let i =0; i< lowerCase.length; i++){
  console.log(lowerCase[i]);
}

console.log("Vowels: ")
for(let i =0; i< vowelsInStr.length; i++){
  console.log(vowelsInStr[i]);
}
