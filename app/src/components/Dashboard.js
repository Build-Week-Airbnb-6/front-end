import React,{useContext, useState, useEffect} from 'react'
import AxiosWithAuth from '../utils/axiosWithAuth'
import { UserContext } from '../utils/UserContext'
import Property from './Property'

export default function Dashboard(props){
    const {userid, setUserid} = useContext(UserContext)
    const [properties, setProperties] = useState([])

    useEffect(() => {
        AxiosWithAuth().get('/users/user/name/' + localStorage.getItem('username'))
            .then(res => {
                console.log(res.data)
                setProperties(res.data.properties)
            })
            .catch(err => console.log(err))
    },[])

    let key=0
    return(
        <div className='Dashboard'>
            <h2>{'Welcome back, ' + localStorage.getItem('username')}</h2>
            {properties.map(v => <Property propertyData={v} key={key++}/>)}
        </div>
    )
}