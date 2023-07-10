const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: []			
		},
		actions: {
			// 1. Obteniendo los personajes de la API
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: "GET",
				})
					.then((response) => response.json())
					.then(data => {
						setStore({ characters: data.results});
						console.log(data.results);
					})// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},
			// 2. Obteniendo los planetas de la API
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: "GET",
				})
					.then((response) => response.json())
					.then(data => {
						setStore({ planets: data.results });
						console.log(data);
					})// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},
			// 2. Obteniendo los coches de la API
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: "GET",
				})
					.then((response) => response.json())
					.then(data => {
						setStore({ vehicles: data.results });
						console.log(data);
					})// => guardo el json en un espacio de memoria
					.catch((error) => console.log(error))// => te aviso si algo sale mal
			},
			
		}
	};
};

export default getState;

//ROUTES
// "characters": "https://www.swapi.tech/api/people/", 
//"planets": "https://www.swapi.tech/api/planets/",
//"vehicles": "https://www.swapi.tech/api/vehicles/" 