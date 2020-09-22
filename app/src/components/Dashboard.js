import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { fetchProperties } from '../store/actions';
import PropertyList from './PropertyList';
import PropertyForm from './PropertyForm';
import { useHistory } from 'react-router-dom';

const Dashboard = (props) => {
    const [propertyList, setPropertyList] = useState([]);
    const history = useHistory();

    const getPropertyList = () => {
        axiosWithAuth()
            .get('/api/properties')
            .then((response) => setPropertyList(response.data.properties))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getPropertyList();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Properties:</h2>
            <PropertyList/>
            <br></br>
            <PropertyForm/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        properties: state.properties,
        isLoading: state.isLoading,
        data: state.data,
        error: state.error,
        user_id: state.user_id,
    }
}


export default connect(mapStateToProps, { fetchProperties })(Dashboard);