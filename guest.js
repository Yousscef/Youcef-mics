var chests = [	"/castles/1/chests/03465e67-f5ba-4696-ba19-dc6f8e48db0d",
				"/castles/1/chests/544c5ade-fd44-453d-b94c-c8283bf7e9f0",
				"/castles/1/chests/61690f30-5cc4-464a-b554-bb6bac976995",
				"/castles/1/chests/2ae4aae4-3b30-4fcf-a808-819ea5a98082",
				"/castles/1/chests/cb2c7e84-4b39-47d4-bcb2-a8dee0f4c4cd",
				"/castles/1/chests/968ce288-090f-4f5b-99af-dfbf6389c979",
				"/castles/1/chests/85871565-c4c6-42bc-95d0-45b4b637c2f2",
				"/castles/1/chests/5b4f8cc0-d9be-4e24-b0a7-5ad00e0e8f2e",
				"/castles/1/chests/13dd15b3-2275-4788-8cea-1e8aec534eef"];
async function fetchAll() {
const results = await Promise.all(chests.map((url) => fetch('https://infinite-castles.herokuapp.com' + url).then((r) => r.json())));
 console.log(JSON.stringify(results, null, 2));
}

fetchAll();
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
