//import { Dimensions } from 'react-native';
//const width = Dimensions.get('window').width;
//const height = Dimensions.get('window').height;
import Color from './Colors'

export default {
  containerDesing: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
  },
  inputBorderDesing: {
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
  buttonDesing: {
    borderRadius: 15, 
    margin:10,
    alignItems: 'center',
    backgroundColor: Color.principalColor,
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
  },
  viewTitle:{
    flex: 0.5, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: Color.principalColor,
  },
  floatButton:{
    alignItems:'center',
    justifyContent:'center',
    width:70,    
    height:70,
    backgroundColor: Color.principalColor,
    borderRadius:100,
  },
  inputWithoutBorder:{
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    
    padding: 10,
    marginHorizontal: 30    
  }
};
