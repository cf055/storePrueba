import AsyncStorage from '@react-native-community/async-storage';

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
        const jsonValue = await AsyncStorage.getItem('@userData')
        console.log(jsonValue);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        alert(e);
    }
}

export { StoreData, GetStoreData}