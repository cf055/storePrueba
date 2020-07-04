import { Dimensions } from 'react-native';

//const width = Dimensions.get('window').width;
//const height = Dimensions.get('window').height;

export default {
  containerDesing: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  },
  inputDesing: {
    padding: 10,
    backgroundColor: 'white',
    height: 50,
    width: 300,
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
  buttonDesing: {
    borderRadius: 15, 
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
  textButtonDesing:{
    color: "white", 
    fontSize: 15, 
    fontWeight: "bold",
  }
};
