import {db, auth} from '../firebase-config'
import { addDoc, collection, serverTimestamp, getDocs, setDoc, updateDoc, doc, Timestamp} from 'firebase/firestore'

export const handleNew = async () => {
   

    const collectionRef = collection(db, "Data")
    const payload = {test};
    const docRef = await addDoc(collectionRef, payload)
}

export const handleEdit = async () => {
    const docRef = doc(db, "Data", localStorage.getItem("email"));

    const values = {
        Timestamp: serverTimestamp(),
        car:3,
        boat:5
    }
    const s = new Date().toLocaleString();
    const payload = {day1: values};
    setDoc(docRef, payload)
}       