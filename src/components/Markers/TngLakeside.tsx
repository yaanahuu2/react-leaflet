import { Marker, Popup } from 'react-leaflet';

export default function TngLakeside() {
    return (

        <Marker position={[52.111016026053036, -122.08639270000002]}>
            <Popup>
                <img src={tng} height={20} alt="TNG-L" />
                Tŝilhqotin National Government <br /> Lakeside Office
            </Popup>
        </Marker>
    );
}

const tng = "https://api.tsilhqotinlanguage.ca/uploads/tng_log_for_language_hub_2e4ec30f17.png"