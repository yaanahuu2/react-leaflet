import './App.css';
import { MapContainer } from 'react-leaflet';
import Tletinqox from './components/Markers/Tletinqox';
import Yunesitin from './components/Markers/Yunesitin';
import Tlesqox from './components/Markers/Tlesqox';
import TngLakeside from './components/Markers/TngLakeside';
import TngMain from './components/Markers/TngMain';
import Xeni from './components/Markers/Xeni';
import Tsideldel from './components/Markers/Tsideldel';
import Esdilagh from './components/Markers/Esdilagh';
import Map from './components/Maps/Map';

export default function App() {

  return (

    <div className="App">
      <MapContainer center={[52.132693, -122.141981]} zoom={9} scrollWheelZoom={true}>

        <Map />

        <TngMain />
        <TngLakeside />
        <Tlesqox />
        <Yunesitin />
        <Tletinqox />
        <Tsideldel />
        <Xeni />
        <Esdilagh />

      </MapContainer>

    </div>
  );
}
