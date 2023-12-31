import { Cordenadas } from '../cordenadas/cordenadas';
import  { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './mapRender.module.css';


export function MapRender() {
  useEffect(() => {
    const setupMap = async () => {

        try{
      const cordenadas = await Cordenadas()

      // Verifica se o elemento #map existe antes de tentar criar o mapa
      const mapElement = document.getElementById('map');
      if (!mapElement) return;

      if (!mapElement._leaflet_id) {
        const map = L.map(mapElement).setView([cordenadas.latitude, cordenadas.longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        // eslint-disable-next-line no-unused-vars
        const marker = L.marker([cordenadas.latitude, cordenadas.longitude]).addTo(map);
      }
   
        }catch(error){
            console.log(error)
        }
    };


    setupMap();
  }, []); // Passar um array vazio como dependência garante que useEffect é executado apenas uma vez, sem dependências

  return (
    <div className={styles.map}>
    <div id="map" style={{ width: '900px' , height:'200px'}}></div>
    </div>
  );
}