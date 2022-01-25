import { Marker, Popup } from 'react-leaflet';

export default function Xeni() {
    return (

        <Marker position={[51.482485674056946, -123.88126937918696]}>
            <Popup>
                <img src={xeni} height={20} alt="Xeni" />
                Xeni <br />
            </Popup>
        </Marker>
    );
}

const xeni = "https://static.wixstatic.com/media/45dfec_7c5545ba470d4c7a91cecb1bc9f56142~mv2.png/v1/fill/w_89,h_85,al_c,q_85,usm_0.66_1.00_0.01/XGlogo_edited_edited.webp"
