import React, {useEffect, useState} from 'react';
import firebase from '../firebase'

export const useAccounts = (addresses) => {

    const [accounts, setAccounts] = useState([])
    useEffect(() => {
        console.log("ADDRESSES", addresses)
        firebase
            .firestore()
            .collection('accounts')
            .onSnapshot((snapshot) => {
                const loadedAccounts = snapshot.docs.map((doc) => ({
                    // if (addresses.includes(doc.data().address)) {
                    //     id: doc.id,
                    //     ...doc.data()
                    // }
                }))
                setAccounts(loadedAccounts)
                console.log(loadedAccounts)
            })
    },[])
 
     return accounts;
}
