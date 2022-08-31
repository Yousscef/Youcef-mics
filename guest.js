//Le nombre de coffres
var chestsNbr = 0;
//le nombre de coffres non vides 
var chestsNbrNotEmpty = 0;
//Les faux cofres ;)
var FalseChestsNbr = 0;
//Les coffres qui ne se sont pas ouvert correctement
var ErrChest = 0;
//L'accès aux pièces qui ne s'est pas déroulé correctement
var ErrRoom = 0;

//Récupérer le contenu de tous les cofres d'une pièce
async function fetchAllChestReference(chestReference) {

const results = await Promise.all(chestReference.map((url) => fetch('https://infinite-castles.herokuapp.com' + url)
	.then(r => r.json())
	.catch(error=>{ ErrChest++; })));
	for (var i = 0; i < results.length; i++) 
	{
		if (results[i] === undefined)
		{
			FalseChestsNbr++;
		} else if (results[i].status === 'It looks like there is something here!')
		{
				chestsNbrNotEmpty++;
		}
		chestsNbr++;
	}
	console.log('Nombre de cofres non vides: ' + chestsNbrNotEmpty);
	console.log('Nombre de cofres : ' + chestsNbr);
	console.log('Erreur ouverture de coffre : ' + ErrChest);
	console.log('Erreur entrée pièce : ' + ErrRoom);
}
//Rentrer dans toutes les pièces du chateau
async function fetchAllRooms(rooms) {
	const rslt = await Promise.all(rooms.map((room) => fetch(room)
	.then(res => { 
		            if (res.ok ) 
						             {  
						             	res.json().then(data => 
						               	{
													JsonRespense = data; 
													if (JsonRespense.chests != null)
													{
														fetchAllChestReference(JsonRespense.chests);
													}
													if (JsonRespense.rooms != null)
													{
														fetchAllRooms((JsonRespense.rooms).map(room => 'https://infinite-castles.herokuapp.com' + room));
													}
													
												return 1;})
												
						} else  {ErrRoom++; return 0;}

					 }

			).catch(error=>{ ErrRoom++; return 0})
		)

	)
}

fetchAllRooms(['https://infinite-castles.herokuapp.com/castles/1/rooms/entry']);

