/*
 *hide and show function
 *alternatively use jquery hide() and show()
 *last edited 10/07/2018 @Junyao Yang
 */

// Get the modal
var modal = document.getElementById('id01');
var button1 = document.getElementById('button1');
var modal = document.getElementById('modal1');

button1.onclick = function() {
	alert("Hello");
	modal.style.display = 'block';
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


