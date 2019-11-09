import React, {useEffect, useState} from 'react';
import firebase from '../firebase'

export const useAccounts = (addresses) => {

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        console.log("ADDRESSES", addresses)

        const unsubscribe = firebase
            .firestore()
            .collection('accounts')
            .onSnapshot((snapshot) => {
                
                const loadedAccounts = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                }))

                var parsedAccounts = []
                
                loadedAccounts.forEach((account) => {
                    if (addresses.includes(account.address)) {
                        parsedAccounts.push(account)
                    }
                })

                setAccounts(parsedAccounts)
                console.log(parsedAccounts)
            })

        return () => unsubscribe()
    },[])
 
     return accounts;
}
