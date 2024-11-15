import React, {useState, useEffect} from 'react'
import React from 'react';

function Homescreen() {
const[rooms, setrooms] = useState([])
useEffect(async()=> {
try{
const data = (await axios.get('/api/rooms/getallrooms')).data
setrooms(data)
}catch (error){
console.log(error)
}
},[])

    return (
        <div>
            <h1>Home screen</h1>
            <h1>there are {rooms.lenght} rooms</h1>
        </div>
    )
}

export default Homescreen