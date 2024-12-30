const sum = require('./sum.js');

function test_sum(){
	if (sum(1,1) === 2){
		console.log('Ok');
	}
	else {
		console.log('Failed')
	}
	if (sum(-2,-2) === -4){
		console.log('Ok');
	}
	else {
		console.log('Failed')
	}
	if (sum(-2,3) === 1){
		console.log('Ok');
	}
	else {
		console.log('Failed')
	}
	if (sum(0,0) === 0){
		console.log('Ok');
	}
	else {
		console.log('Failed')
	}
}

test_sum();
