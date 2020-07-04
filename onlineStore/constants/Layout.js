import { Dimensions } from 'react-native';

//const width = Dimensions.get('window').width;
//const height = Dimensions.get('window').height;

export default {
  containerLoginDesing: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.5,
    justifyContent: 'center',
  },
  containerRegisterDesing: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.5,
    backgroundColor: "white"
  },
  containerUserDesing: {
    flex: 1,
    backgroundColor: "#5664af"
  },
  //isSmallDevice: width < 375,
  inputLoginDesing: {
    backgroundColor: 'white',
    height: 40, 
    width: 300,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  inputRegisterDesing: {
    padding: 10,
    backgroundColor: 'white',
    height: 40,
    width: 250,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#a2a5a4",
    alignItems: 'center',
    margin: 10,
  },
  buttonDesing: {
    borderRadius: 20, 
    margin:10,
    alignItems: 'center',
    backgroundColor: '#5fb1fa',
    padding: 10,
    width: 250
  },
  iconsDesingLogin:{
    marginTop: 15,
  },
  safeArea: {
    flex: 1,
  },
  containerHomeScreen: {
    flex: 1,
    backgroundColor: "white"
  }
};
