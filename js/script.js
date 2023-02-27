let scrollPos = 0;

const nav = document.querySelector('.navbar');

function controlNavbarStatus() {
	let windowY = window.scrollY;
	if (windowY < scrollPos){
		nav.classList.add('is-visible');
		nav.classList.remove('is-hidden');
	} else {
		nav.classList.remove('is-visible');
                nav.classList.add('is-hidden');
	}
	
	scrollPos = windowY;
}

window.addEventListener('scroll', controlNavbarStatus);

