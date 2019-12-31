function makeNumber(str) {
	let res_str = '';
	for (let i = 0; i < str.length; i++) {
		if (str[i].charCodeAt() > 47 & str[i].charCodeAt() < 58) {
			res_str += str[i]
		}
	}
	return res_str;
}

console.log(makeNumber('56sssd232sdsdsd 34 '));

 
 