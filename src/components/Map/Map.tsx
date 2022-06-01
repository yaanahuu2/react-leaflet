import L from 'leaflet';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Map() {
        
    const [ mapState, setMapState ] = useState<any[]>([]);
    const mapUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    const imgUrl = 'https://kkdev.info';
    
    useEffect(() => {
        setMapState([]);
        
        const apiUrl = 'http://localhost:4800/place';

        fetch(apiUrl, { mode: 'cors' })
            .then((res) => {
                return res.json();
            })
            .then((mapData) => {
                setMapState(mapData);
            }).catch(rej => console.log(rej))
    }, []);

    return (
        <div>
            <MapContainer center={[53.384439514620034, -132.24392077670123]} zoom={8} scrollWheelZoom={true}>
                {mapState.map(feature => (
                    <Marker
                        key={feature.id}
                        position={feature.geolocation}
                        icon={L.icon({
                            iconUrl: `${imgUrl}/${feature.iconUrl}`,
                            iconSize: feature.iconSize,
                            iconAnchor: feature.iconAnchor
                        })}
                    >
                        <Popup>
                            <img width="100" src={`${imgUrl}/${feature.iconPreviewUrl}`} alt="" />
                            <h3>{feature.placename}</h3>
                            {feature.description}
                        </Popup>
                    </Marker>
                ))}
                <TileLayer
                    attribution='&copy; ESRI contributors'
                    url={mapUrl}
                />
            </MapContainer>
        </div>
    )
}