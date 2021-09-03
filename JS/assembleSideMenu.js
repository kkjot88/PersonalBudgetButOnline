function assembleSideMenu(currentPage) {
	
	let allSites = [{url: "DodajPrzychod.html", text: "Dodaj przychód"},
					{url: "DodajWydatek.html", text: "Dodaj wydatek"},
					{url: "PrzegladajBilans.html", text: "Przeglądaj bilans"},
					{url: "Ustawienia.html", text: "Ustawienia"},
					{url: "EkranLogowania.html", text: "Wyloguj się"}];	
	
	let sideMenuDiv = $("<div>");
	sideMenuDiv.attr("id", "sideMenu");	
	$("nav").append(sideMenuDiv);
	
	allSites.forEach((site) => {		
		if (currentPage != site.url) {			
			let newLink = $("<a>").attr("href", `${site.url}`).addClass("menuItemLink");			
			let newLinkDiv = $("<div>").addClass("menuItem").text(site.text);
			$(sideMenuDiv).append(newLink);
			$(newLink).append(newLinkDiv);
		}
		else {		
			let activeSiteDiv = $("<div>").attr("id","activeMenuItem").text(site.text);			
			$(sideMenuDiv).append(activeSiteDiv);			
		}
	});
	
	


}