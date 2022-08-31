var tmp_room = 1

function seeing_arround(reference){

	var requestURL = 'https://infinite-castles.herokuapp.com' + reference;
	
	var XMLHttpRequest = require('xhr2');
	var request = new XMLHttpRequest();
	
	tmp_room++;

	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var objects = request.response;
		if (objects.chests != null) {
			console.log(' ------ tous les coffres ------', objects.chests)
			count_chests(objects.chests, nbChests, NbNotEmptyChests);
		}
		if (objects.rooms != null) {
			for (var i = 0; i < objects.rooms; i++) {
				seeing_arround(objects.rooms[i], nbChests, NbNotEmptyChests);
			}
		}
	}
}

function count_chests(Mychests, nbChests, NbNotEmptyChests){
	var len = Mychests.length
	nbChests = nbChests + len
	for (var i = 0; i < len; i++) {
		var requestURL = 'https://infinite-castles.herokuapp.com' + Mychests[i];
		console.log(i + ' coffre ------ ', requestURL)
		var XMLHttpRequest = require('xhr2');
		var req = new XMLHttpRequest();
		req.open('GET', requestURL);
		req.responseType = 'json';
		req.send();

		req.onload = function() {
		var chts = req.response;
		console.log('coffre : response ' + req.response)
		if (chts.status != 'This chest is empty :/ Try another one!') {
				NbNotEmptyChests = NbNotEmptyChests + 1
			} 
		}
	}
}
 

var fin, début;

var nbChests = 0, NbNotEmptyChests = 0;

start = new Date();

seeing_arround('/castles/1/rooms/entry', nbChests, NbNotEmptyChests);

end = new Date();

console.log('Durée du parcours : ' + (end.getTime() - start.getTime()) + ' msec');
console.log('Nombre de cofres : ' + nbChests);
console.log('Nombre de cofres non vide : ' + NbNotEmptyChests);


