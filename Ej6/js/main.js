const dividirArray = (nums) => {

    let par = [];
    let impar = [];

    nums.forEach(num => {
        if (num % 2 == 0) {
            par.push(num);
        } else {
            impar.push(num);
        }    
    });

    console.log('Pares:' + par);
    console.log('Impares:' + impar);
}


let nums = [1,2,3,4,5,6,7,8,9,10];

dividirArray(nums);