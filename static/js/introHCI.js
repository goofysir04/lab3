'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("JavaScript has taken control");
		$("button#testjs").text("Often times I feel apathetic and Helpless :_ (");
		$(".jumbotron p").addClass("active");

	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	var containingProject = $("a.thumbnail").closest(".project");


	
	/*function projectClick(e){
		e.preventDefault();;
		$(this).append("<div class='project-description'><p>project-description of the project.</p></div>");
	}
	containingProject.click(projectClick);
*/
	function projectClick(e){
	e.preventDefault();
 
 	if($(".project-description").length == 0){
		$(this).append("<div class='project-description'><p>project-description of the project.</p></div>");
		$(this).css("background-color", "#7fff00");
		

	}else{
		$(".project-description").html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	}

	}
	//$("a.thumbnail").click(projectClick);
	containingProject.click(projectClick);


}
