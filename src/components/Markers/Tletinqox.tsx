import { Marker, Popup } from 'react-leaflet';

export default function Tletinqox() {

    return (

        <Marker position={[52.012057, -123.171935]}>
            <Popup>
                <img src={tletinqox} height={25} alt="Tl'etinqox" />
                Tl'etinqox <br />
            </Popup>
        </Marker>
    );
}

const tletinqox = "https://imageprocessor.digital.vistaprint.com/crop/0,0,472x473/maxWidth/1000/https://uploads.documents.cimpress.io/v1/uploads/ff71f0b3-eacb-417b-a68f-f94c11d642c9~110/original?tenant=vbu-digital"

