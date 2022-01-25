import { Marker, Popup } from 'react-leaflet';

export default function Tlesqox() {
    return (

        <Marker position={[51.929741999505076, -122.5014795881516]}>
            <Popup>
                <img src={tlesqox} height={20} alt="Tl'esqox" />
                Tl'esqox <br />
            </Popup>
        </Marker>
    );
}

const tlesqox = "https://tlesqox.com/wp-content/uploads/2021/04/tlesqox_toosey_logo.png"