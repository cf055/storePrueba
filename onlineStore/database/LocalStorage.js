import AsyncStorage from '@react-native-community/async-storage';
import * as context from '../database/Context';

const StoreData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@userData', jsonValue)
    } catch (e) {
        alert(e);
    }
}


const GetStoreData = async () => {
    try {
        const getData = await AsyncStorage.getItem('@userData');
        const dataJson = JSON.parse(getData);
        const idUser2 = dataJson['id'];
        //console.log(idUser2);
        return idUser2;
        //context.IdUserEjemplo = dataJson['id'];
        //console.log(idUser2);
        
    } catch (e) {
        alert(e);
    }
}

export { StoreData, GetStoreData}