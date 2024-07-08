/// <reference types="@types/google.maps" />

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-busquedamapa',
  templateUrl: './busquedamapa.page.html',
  styleUrls: ['./busquedamapa.page.scss'],
})
export class BusquedamapaPage implements OnInit, AfterViewInit {
  map!: google.maps.Map;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Mapa de búsqueda | SaludYa');
  }

  async ngAfterViewInit() {
    await this.loadMap();
  }

  async loadMap() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const mapOptions = {
        center: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        },
        zoom: 12
      };
  
      const mapElement = document.getElementById('map') as HTMLElement;
      if (mapElement) {
        this.map = new google.maps.Map(mapElement, mapOptions);
  
        this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
          const lat = event.latLng?.lat();
          const lng = event.latLng?.lng();
          console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        });
  
        this.addSearchFunctionality();
      } else {
        console.error('Map element not found');
      }
    } catch (error) {
      const errorMessage = (error as any).message || 'Unknown error';
      console.error('Error getting location', error);
      alert('Error getting location: ' + errorMessage);
    }
  }

  addSearchFunctionality() {
    if (!this.map) return;

    const input = document.createElement('input');
    input.id = 'pac-input';
    input.classList.add('controls');
    input.type = 'text';
    input.placeholder = 'Search Box';
    document.body.appendChild(input);

    const searchBox = new google.maps.places.SearchBox(input);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    this.map.addListener('bounds_changed', () => {
      searchBox.setBounds(this.map.getBounds() as google.maps.LatLngBounds);
    });

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (!places || places.length === 0) {
        return;
      }

      const bounds = new google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log('Returned place contains no geometry');
          return;
        }

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      this.map.fitBounds(bounds);
    });
  }
}
