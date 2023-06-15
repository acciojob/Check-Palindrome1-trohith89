// complete the given function

function palindrome(str){
	let s = 0;
	let e = str.length-1;
	while(s<=e){
		if(str[s] == str[e]){
			s++;
			e--;
		}
		else{
			return false;
		}
	}
	return true;
}
module.exports = palindrome
