//select eye  image
let  eyeImg= document.querySelector('.login-eye');

//sell	ect input password
let  passInput = document.querySelector('.pass-input');


passInput.addEventListener('keyup',function(){
	let passNumber=passInput.value.length
	if(passNumber==0){
		eyeImg.style.display="none"
		}else{
			eyeImg.style.display="inline-block "
	        }
});


eyeImg.addEventListener('click' , function(){
	 let passInputType= passInput.getAttribute('type');
	
	//toggel between password/text input type
	if(passInputType == 'password'){
		passInput.setAttribute('type','text');
		eyeImg.setAttribute('src','image/invisible-eye.png');
		}else{
		passInput.setAttribute('type','password');
		eyeImg.setAttribute('src','image/visible-eye.png');
			};
	});