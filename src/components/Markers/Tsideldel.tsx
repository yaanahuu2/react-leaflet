import { Marker, Popup } from 'react-leaflet';

export default function Tsideldel() {
    return (

        <Marker position={[52.07667678712459, -124.28841291394743]}>
            <Popup>
                <img src={tsideldel} height={20} alt="Tsi Deldel" />
                Tŝi Deldel <br />
            </Popup>
        </Marker>
    );
}

const tsideldel = "http://www.tsideldel.org/images/all%20pages/acfnlogo.jpg"