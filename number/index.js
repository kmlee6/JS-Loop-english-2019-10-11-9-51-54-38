var numbers = Array.from(new Array(21), (_,i) => i)
for(i in numbers){
  var string = i%2==0?"is even number.":"is odd number."
  console.log(`${i} ${string}`)
}