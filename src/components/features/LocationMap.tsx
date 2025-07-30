import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin } from 'lucide-react';

const LocationMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [28.9784, 41.0082], // Istanbul coordinates
        zoom: 12,
        pitch: 45,
      });

      // Add BYT Digital office marker
      new mapboxgl.Marker({
        color: '#8B5CF6'
      })
        .setLngLat([28.9784, 41.0082])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div class="p-2"><h3 class="font-bold">BYT Digital</h3><p>İstanbul Ofisi</p></div>')
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      setIsMapInitialized(true);
    } catch (error) {
      console.error('Mapbox initialization error:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-96 bg-card rounded-2xl overflow-hidden border border-border">
      {!isMapInitialized ? (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <MapPin className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-lg font-semibold mb-2">Konum Haritası</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Haritayı görüntülemek için Mapbox token'ınızı girin.
          </p>
          <a 
            href="https://mapbox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent underline text-sm mb-4"
          >
            Mapbox token almak için tıklayın
          </a>
          <div className="flex gap-2 w-full max-w-md">
            <Input
              type="text"
              placeholder="Mapbox Public Token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button onClick={initializeMap} disabled={!mapboxToken}>
              Haritayı Yükle
            </Button>
          </div>
        </div>
      ) : null}
      <div ref={mapContainer} className={`w-full h-full ${!isMapInitialized ? 'hidden' : ''}`} />
    </div>
  );
};

export default LocationMap;