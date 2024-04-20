import {Component} from '@angular/core';
import * as Leaflet from 'leaflet';

Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
selector: 'app-mapa',
templateUrl: './mapa.component.html',
styleUrls: ['./mapa.component.css']
})
export class MapaComponent {

    FRI_LAT = 46.052076;
    FRI_LNG = 14.466812;

    FE_LAT = 46.0446209;
    FE_LNG = 14.489393;

    // Seznam markerjev imamo na voljo v primeru, ko jih želimo posodabljat, odstranjevat z mape itd.
    markers: Leaflet.Marker[] = [];

    // Ustvarimo objekt mapa ter dodamo osnovne lastnosti mapi
    map!: Leaflet.Map;
    options = {
        layers: [
            Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">Spletno programiranje</a>'
            })
        ],
        zoom: 9,
        center: {lat: this.FRI_LAT, lng: this.FRI_LNG}
    }

    dodajMarker(lastnosti: any): void {
        // Ustvarimo marker
        const marker = Leaflet.marker(lastnosti.pozicija, {draggable: lastnosti.premicnost});

        // Dodamo marker globalnemu seznamu
        this.markers.push(marker);

        // Dodamo dodatne lastnosti markerju;
        marker.on('click', (event) => this.markerClicked(event, this.markers.length));
        marker.on('dragend', (event) => this.markerDragEnd(event, this.markers.length));

        // Izpišemo želeno sporočilo v oblaček
        marker.addTo(this.map).bindPopup(lastnosti.oblacek);
        this.map.panTo(lastnosti.pozicija);
    }

    onMapReady($event: Leaflet.Map) {
        this.map = $event;

        this.dodajMarker({
            pozicija: {lat: this.FRI_LAT, lng: this.FRI_LNG},
            premicnost: false,
            oblacek: "<div>Tukaj se nahaja FRI</div>"
        });

        this.dodajMarker({
            pozicija: {lat: this.FE_LAT, lng: this.FE_LNG},
            premicnost: false,
            oblacek: "<div>Tukaj se nahaja FE</div>"
        });
    }

    mapClicked($event: any) {
        console.log($event.latlng.lat, $event.latlng.lng);
    }

    markerClicked($event: any, index: number) {
        console.log($event.latlng.lat, $event.latlng.lng);
    }

    markerDragEnd($event: any, index: number) {
        console.log($event.target.getLatLng());
    }
}
