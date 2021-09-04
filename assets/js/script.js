var button = document.querySelector('.toggle');
var navMenu = document.querySelector('.menu-container');
var win = window;

function openMenu(click) {		  
	button.classList.toggle('active');
	navMenu.classList.toggle('active');
		
	click.stopImmediatePropagation();
}
		  
function closeMenu(click) {
	if (button.classList.contains('active')) {
		  	button.classList.remove('active');
			navMenu.classList.remove('active');

	}
}		
	  	
button.addEventListener('click', openMenu);
win.addEventListener('click',closeMenu);   

/*END SCRIPT MENU*/



const filter = document.querySelector('.ul-links').children;
const photos = document.querySelector('.content-galeria-photos').children;

for(let i = 0; i < filter.length; i++){
	filter[i].addEventListener('click', function(){
		for(let j = 0; j < filter.length; j++){
			filter[j].classList.remove('active');

		}
		filter[i].classList.add('active');

		var target = filter[i].getAttribute('data-target');
		for(let k = 0; k < photos.length; k++){
			photos[k].style.display = 'none';
			if (target == photos[k].getAttribute('data-id')) {
				photos[k].style.display = 'block'
			}
			if(target == 'todos'){
				photos[k].style.display = 'block'
			}
		}
	})
}

const closebox = document.querySelector('.close-box');
const lightBox = document.querySelector('.content-galeria-zoom');
const lightBoxImg = lightBox.querySelector('img');

	lightBox.addEventListener('click', function(){
		if (event.target != lightBoxImg) {
			lightBox.classList.remove('show')
			lightBox.classList.add('hide')
		}
	})

	closebox.addEventListener('click', function(){
		lightBox.classList.remove('show');
		lightBox.classList.add('hide');

	})

const gallery = document.querySelector('.content-galeria-photos');
const galleryItem = document.querySelectorAll('.content-galeria-photo');

galleryItem.forEach(function(element){
	element.querySelector('.fa-plus').addEventListener('click', function(){
		lightBox.classList.remove('hide');
		lightBox.classList.add('show');
		lightBoxImg.src = element.querySelector('img').getAttribute('src');
				
	})
})