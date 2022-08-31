//Les coffres
var chests = []; 
//Récupérer le contenu de tous les cofres d'une pièce
async function fetchAllChestReference(chestReference) {
const results = await Promise.all(chestReference.map((url) => fetch('https://infinite-castles.herokuapp.com' + url).then(r => r.json())));
 console.log(results);
 chests.concat(results);
}
//Rentrer dans toutes les pièces du chateau
async function fetchAllRooms(rooms) {
	const JsonRespense = await Promise.all(rooms.map(room => fetch(room)
	.then(res => res.json())
	));
	console.log(JsonRespense);
	if (JsonRespense[0].chests != null){
		fetchAllChestReference(JsonRespense[0].chests)
	}
	if (JsonRespense[0].rooms != null){
		fetchAllRooms((JsonRespense[0].rooms).map(room => 'https://infinite-castles.herokuapp.com' + room));
	}
}


fetchAllRooms(['https://infinite-castles.herokuapp.com/castles/1/rooms/entry']);
for (var i = chests.length - 1; i >= 0; i--) {
	console.log(chests[i]);
}

//------------------------------------------------------------------------
//Version 1.0
//------------------------------------------------------------------------
/*var AllChest = null

function seeing_arround(reference){

	var requestURL = 'https://infinite-castles.herokuapp.com' + reference;
	
	var XMLHttpRequest = require('xhr2');
	var request = new XMLHttpRequest();
	
	

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

async function count_chests(Mychests, nbChests, NbNotEmptyChests){
		
		 
  	const results = await Promise.all(Mychests.map((url) => fetch(url).then((r) => r.json())));
 	console.log(JSON.stringify(results, null, 2));
		
		
		/*var chts = req.response;
		console.log('coffre : response ' + req.response)
		if (chts.status != 'This chest is empty :/ Try another one!') {
				NbNotEmptyChests = NbNotEmptyChests + 1
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

*/
