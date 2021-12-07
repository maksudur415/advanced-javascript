function stopWatch(){
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1);