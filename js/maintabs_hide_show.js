/*
 *hide and show function
 *alternatively use jquery hide() and show()
 *last edited 11/15/2018 @WilliamCollicott
 */
// Get the modal
//var modal = document.getElementById('id01');
$(document).ready(init);

// Runs when the HTML page is loaded. This method loads the open/close ability
// for each modal in the current projects tab and the past projects tab
function init()
{
	// Creates an array of accordions (for the current/past projects tab(s))
	// and opens or closes them on each click.
	var accordions = document.getElementsByClassName("accordion");
	for(var i = 0; i < accordions.length; i++) {
		accordions[i].onclick = function() {
			var content = this.nextElementSibling;
			if(content.style.maxHeight) {
				// Close accordion
				content.style.maxHeight = null;
			} else {
				// Open accordion
				content.style.maxHeight = content.scrollHeight + "px";
			}
		}
	}

	// Closes any active modal on either tab when the exit button is pressed
	$(".delete").on('click',function(){
    	$(".modal").removeClass("is-active");
	});

	// Current Projects buttons
	$("#button1").on('click',function(){
		$("#modal1").addClass("is-active");
	});

	$("#button2").on('click',function(){
		$("#modal2").addClass("is-active");
	});

	$("#button3").on('click',function(){
		$("#modal3").addClass("is-active");
	});

	// Past Projects buttons
	$("#buttonPP1").on('click',function(){
		$("#pp1").addClass("is-active");
	});

	$("#buttonPP2").on('click',function(){
		$("#pp2").addClass("is-active");
	});

	$("#buttonPP3").on('click',function(){
		$("#pp3").addClass("is-active");
	});

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById('myImg');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	img.onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	}

	// Get the <span> element that closes the modal
	//var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	// span.onclick = function() { 
	// 	modal.style.display = "none";
	// }

	document.onkeydown = function (evt) {
		evt = evt || window.event;
		if(evt.keyCode == 27) {
			modal.style.display = "none"
		}
	}
}
	
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function Open_Tab(tab_name)
{
	var i, x, tablinks;
	x = document.getElementsByClassName("tab_content");
	for (i=0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	document.getElementById(tab_name).style.display = "inline-block";  
}

function myFunction() {
    var x = document.getElementById("mytab");
    if (x.className === "tab") {
        x.className += " responsive";
    } else {
        x.className = "tab";
    }
}



