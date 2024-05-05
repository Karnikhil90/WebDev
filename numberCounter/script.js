const decr = document.getElementById("Decr");
const incr =document.getElementById("Incr");
const re = document.getElementById("Re");

const lable = document.getElementById("theNum");

let count = 0;

decr.onclick =function(){
	count--;
	lable.textContent = count;
	console.log(count);
}
re.onclick =function(){
	count=0;
	lable.textContent = count;
	console.log("RESET = 0");
}
incr.onclick =function(){
	count++;
	lable.textContent = count;
	console.log(count);
}
	
