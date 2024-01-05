    // ---------------------------------------------------------------fcc.js--------------------------------------------------------------

    //tooltip function
	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});


    //side nav hide code
	document.addEventListener("DOMContentLoaded", function () {
		const nav = document.querySelector(".sidenav");
		const navtoggle = document.getElementById("navtoggle");

		navtoggle.addEventListener("click", function () {
			nav.classList.toggle("nav-hidden");
		});
	});


    //project and Item page scorll in right
    document.addEventListener("DOMContentLoaded", function () {
		const nav = document.querySelector(".sidenav");
        // const fcc = document.querySelector(".fcc");
		const navtoggle = document.getElementById("navtoggle");
		const mainContent = document.querySelector(".main-content");

		navtoggle.addEventListener("click", function () {
			nav.classList.toggle("nav-hidden");
            // fcc.classList.toggle("fcc-hidden")
			mainContent.classList.toggle("main-content-collapsed");
			mainContent.classList.toggle("main-content-expanded");
		});
	});


    // project filter data
    $(document).ready(function(){
        $("#projectinput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#projectlist tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });

    // item filter data
    $(document).ready(function(){
        $("#iteminput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#itemlist tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
    });

