function decimalToBinary(num) {
  //Write you code here
  let ans = "";
	while(num>0){
		ans += (num%2);
		num = num/2;
	}
}

window.decimalToBinary = decimalToBinary;
