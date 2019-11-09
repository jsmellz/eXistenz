import React, {useEffect, useState} from 'react';
import randomCoordinates from 'random-coordinates'

export const useCoordinate = () => {

    const [coordinate, setCoordinate] = useState([])

    useEffect(() => {
        generateCoordinate()
    },[])

    function generateCoordinate() {
        const coordinates = randomCoordinates().split(', ')
        setCoordinate({lat:parseFloat(coordinates[0]), lng:parseFloat(coordinates[1])})
     }
 
     return { coordinate, generateCoordinate };
}
