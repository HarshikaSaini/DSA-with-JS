let array = [45,-5,0,-11,9,9] // [-5,45,0,11,9],[-5,0,45,11,9],[-5,0,11,45,9],[-5,0,11,9,45]

for(let i = array.length-1 ; i > 0; i--){//0
    for(let j = 0; j < array.length; j++){ // 5
        if(array[j] > array[j+1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
            
        }
       
    }
}

console.log(array)