
let back= document.getElementById('back');
let tog= document.getElementById('tog');
let menu= document.getElementById('sidemenu');

back.onclick = () => {
	menu.classList.add('d-none-md');
}

tog.onclick = () => {
	menu.classList.remove('d-none-md');
}


