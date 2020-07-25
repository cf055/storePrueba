import { useState, useEffect } from '../node_modules/react';

import * as Location from '../node_modules/expo-location/build/Location';
import * as Permissions from 'expo-permissions';

function locationService() { 
  const [location, setLocation] = useState('ejemplo');
  const [errorMsg, setErrorMsg] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      //.timestamp para hora
      let location = await (await Location.getCurrentPositionAsync({})).coords;
      setLocation(location);
    })();
  });

  let coords = 'Waiting..';

  if (errorMsg) {
    coords = errorMsg;
    return coords;
  } else if (location) {
    coords = location.latitude + ' / ' + location.longitude;
    return coords;
  }
}

function lectorqrService() {
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    (async () => {
      
      //Codigo qr.
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      //const { status } = await BarCodeScanner.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }
      
    })();
  }, []);

  /*if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }*/
}

const handleBarCodeScanned = ({ type, data }) => {
  setScanned(true);
  setCodeqr(data);
  setModalVisible(!modalVisible);
  //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
};
export { locationService, lectorqrService};