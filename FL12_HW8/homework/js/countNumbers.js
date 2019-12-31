function makeNumber(str) {
	let res_str = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i].charCodeAt() > 47 & str[i].charCodeAt() < 58) {
			res_str += str[i]
		}
	}
	return res_str;
}

function countNumbers(str) {
    let res;
    let obj = {};
   
    if (str === undefined) {
        return obj;
    } else {
        res = makeNumber(str);
        obj[res.charAt(0)] = 1;
        for (let i = 1; i < res.length; i++) {
            if (obj[res.charAt(i)]) {
                obj[res.charAt(i)]++;
            } else {
                obj[res.charAt(i)] = 1;
            }
        }
        return obj;
    }
}

console.log(countNumbers("gg23gvjc55sfsf 55sf 111661"));
countNumbers();