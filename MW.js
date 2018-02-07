const closeButton = document.querySelector(".close-btn");
const lightBox = document.querySelector(".lightbox");
const textButton = document.querySelectorAll(".text");
const lightboxImage = document.querySelector(".lightbox-image");
const portfolioItems = document.querySelectorAll(".portfolio-item");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

// show lightBox
function showImage(event){
		// alert("I clicked");

	lightBox.classList.remove("hidden");
	// get current gallery item
	const elementClickedOn = event.target;
	const portfolioItem = elementClickedOn;
	const portfolioItemParent = elementClickedOn.parentElement;
	
	//replace with current image and caption
	lightboxImage.innerHTML = portfolioItemParent.innerHTML;
}
// hide lightBox
function hideImage(event){
	//cause it is a link, you need to add 
	event.preventDefault();
	lightBox.classList.add("hidden");
}

// hide lightBox when close button is clicked
closeButton.onclick = hideImage;
	// REMEMBER!!! ALERT!!! 
	// Eg: function blahblah(event){...}
	// when you call out function, please dont include curly braces!

let portfolioIndex = 0;

// show image by clicking on the item
for(let i = 0; i < portfolioItems.length; i++){
	let textButton = portfolioItems[i];
	textButton.onclick = function(event) {
		showImage(event);
		portfolioIndex = i;
	}
}

nextButton.onclick = function() {
	lightBox.classList.remove("hidden");
	portfolioIndex++;
	if(portfolioIndex > 5){
		lightboxImage.innerHTML = portfolioItems[0].innerHTML;
		portfolioIndex = 0;
	}
	lightboxImage.innerHTML = portfolioItems[portfolioIndex].innerHTML;
}

prevButton.onclick = function() {
	lightBox.classList.remove("hidden");
	portfolioIndex--;
	if(portfolioIndex < 0){
		lightboxImage.innerHTML = portfolioItems[5].innerHTML;
		portfolioIndex = 5;
	}
	lightboxImage.innerHTML = portfolioItems[portfolioIndex].innerHTML;
}





