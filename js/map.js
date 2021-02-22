//MAPA
var map = L.map('mapid').setView([-34.6082837, -58.4009471], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.60459930239667, -58.402407185298536]).addTo(map)
L.marker([-34.614489216072094, -58.38665725441306]).addTo(map)
L.marker([-34.61210514824999, -58.39993955284223]).addTo(map)
L.marker([-34.611232729117944, -58.40646825378807]).addTo(map)
L.marker([-34.601931516513304, -58.394464726821155]).addTo(map)
L.marker([-34.58475046121673, -58.4139299060679]).addTo(map)
L.marker([-34.59004759015812, -58.41582235401312]).addTo(map)