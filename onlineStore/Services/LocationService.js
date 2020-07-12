import { useState, useEffect } from '../node_modules/react';

import * as Location from '../node_modules/expo-location/build/Location';

function locationService() { 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

export { locationService };