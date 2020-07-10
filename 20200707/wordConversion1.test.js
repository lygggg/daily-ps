

const wordConversion = (begin, target, words) => {
    const arr = [];
    recursive(begin, target, words, 0 ,arr);
    console.log(arr);
    if(arr.length === 0) {
        return 0;
    }
    return Math.min(...arr)
}

const recursive = (begin, target, words, count, arr) => {
    if(begin === target) {
        arr.push(count);
        return;
    }

    for(let i = 0; i<words.length; i++) {
        if(begin === target) {
            arr.push(count);
            return;
        }
        if(isMatch(begin, words[i]) === true) {
            const words1 = words.slice();
            words1.splice(words.indexOf[i],1);
            recursive(words1[i], target, words1, count+1, arr);
        }
    }
}

const isMatch = (source, destination) => {
    let count = 0;

    for(let j = 0; j<source.length; j++) {
        if(source[j] === destination[j]) {
            count +=1;
        }
    }

    if(count === source.length -1) {
        return true;
    }
    return true;
}