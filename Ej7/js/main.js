const mayorCinco = (nums) => {

    let cinco = [];

    nums.forEach(num => {
        if (num > 5) {
            cinco.push(num);
        }
    });

    console.log('Mayores que 5: ' + cinco);
}


let nums = [1,2,3,4,5,6,7,8,9,10];

mayorCinco(nums);