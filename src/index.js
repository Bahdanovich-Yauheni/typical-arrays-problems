
exports.min = function min(arr){
    if (!arr || arr.length === 0){return 0;}
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min
}

exports.max = function max(arr){
    if (!arr || arr.length === 0){return 0;}
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}

exports.avg = function avg(arr){
    let avg = 0;
    let sum = 0;
    if (!arr || arr.length === 0){return 0;}
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum / arr.length;


    return avg
}