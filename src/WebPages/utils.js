import {db, auth} from '../firebase-config'
import { addDoc, collection, serverTimestamp, getDocs, setDoc, updateDoc, doc, Timestamp} from 'firebase/firestore'
export const handleNew = async () => {
   

    const collectionRef = collection(db, "Data")
    const payload = {test};
    const docRef = await addDoc(collectionRef, payload)
    
}

export const handleEdit = async (event) => {

    const collectionRef = collection(db, localStorage.getItem("email"))


    const values = {
        Timestamp: serverTimestamp(),
        car_miles: Number(localStorage.getItem("suv_miles")),
        public_transport_miles: Number(localStorage.getItem("bus_miles")),
        plane_miles: Number(localStorage.getItem("plane_miles")),
        meat_grams: Number(localStorage.getItem("meat_cals")),
        veggie_grams: Number(localStorage.getItem("veg_cals")),
        grain_grams: Number(localStorage.getItem("grain_cals")),
        dairy_grams: Number(localStorage.getItem("dairy_cals")),
        water_usage: Number(localStorage.getItem("water_cost")),
        electricity_usage: Number(localStorage.getItem("electric_cost"))
    }   
    const payload = {day1: values};
    addDoc(collectionRef, payload) 
}     

export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}