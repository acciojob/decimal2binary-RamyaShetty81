function decimalToBinary(num) {
  //Write you code here
  let ans = "";
	while(num>0){
		ans += (num%2);
		num = num/2;
	}
	return ans;
}

window.decimalToBinary = decimalToBinary;
