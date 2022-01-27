import { Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const tngMarker = new Icon({
    iconUrl: "https://api.tsilhqotinlanguage.ca/uploads/tng_log_for_language_hub_2e4ec30f17.png",
    iconSize: [25, 35]
});

export default function TngMain() {
    return (

        <Marker icon={tngMarker} position={[52.132693, -122.141981]}>
            <Popup className='popupCustom'>
                <img src={tng} height={20} alt="TNG-M" />
                Tŝilhqotin National Government <br /> Main Office
            </Popup>
        </Marker>
    );
}

const tng = "https://api.tsilhqotinlanguage.ca/uploads/tng_log_for_language_hub_2e4ec30f17.png"