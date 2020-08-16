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
        let dataJson = JSON.parse(getData);
        let idUser2 = dataJson['id'];
        if(idUser2 == undefined){
            return false;
            
        }
        else{
            return true;
           
        }
    } catch (e) {
        alert(e);
    }
}

function GetData() {
    let ejemplo = false;
    GetStoreData().then(
        value => {
            ejemplo = value;
        }
    );
    console.log(ejemplo);
}


const DeleteData = async () => {
    try {
        AsyncStorage.removeItem('@userData');
        console.log('data delete.');
    } catch (e) {
        alert(e);
    }
} 

export { StoreData, GetData, DeleteData}