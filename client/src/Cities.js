
 
 export const cities = [
  {
    id: 1,
    name: "Berlin",
    coordinates: [52.52, 13.405],
    destinations: [{ id: 2, name: "Zurich", routeid: 1, route: "Berlin-Zurich" }],
    routes: [{ id: 1, name: "Berlin-Zurich" }]
  },
  {
    id: 2,
    name: "Zurich",
    coordinates: [47.3769, 8.5417],
    destinations: [
      { id: 1, name: "Berlin", routeid: 1, route: 'Berlin-Zurich'},
      { id: 3, name: "Budapest", routeid: 2, route: 'Zurich-Budapest'},
    ],
    routes: [
      {id: 1, name: "Berlin-Zurich"},  
      {id: 2, name: "Zurich-Budapest"}
    ]
  },
  {
    id: 3,
    name: "Budapest",
    coordinates: [47.4979, 19.0402],
    destinations: [{ id: 2, name: "Zurich", routeid: 2, route: "Zurich-Budapest"}],
    routes:[{id: 2, name: "Zurich-Budapest"}] 
  },
];

