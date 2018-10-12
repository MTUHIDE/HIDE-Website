/*
 *hide and show function
 *alternatively use jquery hide() and show()
 *last edited 10/10/2018 @WilliamCollicott
 */

// Get the modal
var modal = document.getElementById('id01');
$(document).ready(init);

function init()
{
	$('#modal1').addClass('is-active');

	$(".delete").on('click',function(){
    	$(".modal").removeClass("is-active");
	});

	$("#button1").on('click',function(){
		$("#modal1").addClass("is-active");
	});
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

	document.getElementById(tab_name).style.display = "block";  
}


