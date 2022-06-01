import { Button, Drawer } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import Map from './components/Map/Map';
import ResourceConnections from './components/ResourceConnections/ResourceConnections';



export default function App() {

    const [drawerState, setDrawerState] = useState(false);

    const toggleDrawer =
      (open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setDrawerState(open);
      };

  return (

    <div>
      <h2>Haida Gwaii</h2>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>Toggle Drawer</Button>
        <Drawer
          anchor="right"
          open={drawerState}
          onClose={toggleDrawer(false)}
        >
          <ResourceConnections />
        </Drawer>
      </React.Fragment>
      <Map />

    </div>
  );
}
