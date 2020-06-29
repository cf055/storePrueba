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
  //isSmallDevice: width < 375,
  inputLoginDesing: {
    backgroundColor: 'white',
    height: 40, 
    width: 300,
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 15,
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
  textLoginDesing:{
    fontWeight: "bold",
    color:'black',
  },
  buttonLoginDesing: {
    borderRadius: 10, 
    margin:10,
    alignItems: 'center',
    borderColor: 'black', 
    borderWidth: 1,
    backgroundColor: '#5664af',
    padding: 10
  },
  buttonRegisterDesing: {
    borderRadius: 10, 
    margin:10,
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: '#4b2fd5',
    padding: 10,
    width: 250
  },
  iconsDesingLogin:{
    marginTop: 15,
  },
  safeArea: {
    flex: 1,
  }
};
