/*
 *hide and show function
 *alternatively use jquery hide() and show()
 *last edited 10/07/2018 @Junyao Yang
 */

function Open_Tab(tab_name)
{
	var i, x, tablinks;
	x = document.getElementsByClassName("tab_content");
	for (i=0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	document.getElementById(tab_name).style.display = "block";  
}


