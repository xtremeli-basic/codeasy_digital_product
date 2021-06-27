//Declaring and initializing variable
var sum = 0;
var i;
var j;
var k;

//Looping through all three digit numbers
for(i=0; i<=9; i++){
    for(j=0; j<=9; j++){
        for(k=0; k<=9; k++){
            var num = Number(i + "" + j + "" + k);
            var variableSum = i * j * k;
            //Filtering the sum that is equal to 12
            if(variableSum === 12){
                sum += num
            }
        }
    }
}

//Logging the result
console.log(sum)
