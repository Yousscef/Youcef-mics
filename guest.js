function seeing_arround(reference){
	
	var nbChests = 0;
	var NbNotEmptyChests = 0;
	

	var requestURL = 'https://infinite-castles.herokuapp.com' + reference;
	
	var XMLHttpRequest = require('xhr2');
	var request = new XMLHttpRequest();
	
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var objects = request.response;
		if (objects.chests != null) {
			count_chests(objects.chests, nbChests, NbNotEmptyChests);
		}
		if (objects.rooms != null) {
			get_in(objects.rooms);
		}
	}
}

function get_in(Myroom){  
	console.log(Myroom)
}

function count_chests(Mychests){
	console.log(Mychests)
}
   //Access to the rooms
   
seeing_arround('/castles/1/rooms/534ade42-c185-460e-a57e-3d0baf6342bf');
//seeing_arround('/castles/1/chests/61690f30-5cc4-464a-b554-bb6bac976995');
   //return "Hi, "+ name;


