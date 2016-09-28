function check(){
	var mystring = document.getElementById("prompt").value;
	function is_a_palindrome(str){
		if(!str || !(typeof str === "string")){ 
			return;
		}else{
			var reverse="";
			var i = str.length;
			while (i > 0){
				reverse = reverse + str[i-1];
				i-=1;
			}
			return (str.toLowerCase() == reverse.toLowerCase());
		}
	}
	is_a_palindrome(mystring) ? 
	document.getElementsByTagName('p')[0].textContent = `"${mystring}" is a palindrome`
	:
	document.getElementsByTagName('p')[0].textContent = `"${mystring}" is not a palindrome`
	;
}