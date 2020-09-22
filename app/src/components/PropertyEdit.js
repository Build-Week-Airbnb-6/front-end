import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

export const PropertyEdit = () => {
    const history = useHistory();
    const [card, setCard] = useState(null);
    const params = useParams();

    const initialCard = {
        user_id: '2', //will probably have to change depending on back end
        title: '',
        category:'',
        content:'',
        id: params.id,
    };

    const [cardToEdit, setCardToEdit] = useState(initialCard);
    
    const fetchProperty = (id) => {
        axiosWithAuth()
            .get(`/api/properties/${id}`)
            .then((res) => setCard(res.data))
            .catch((err) => err);
    }

    useEffect(() => {
        fetchProperty(params.id);
    }, [params.id]);

    const putProperty = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/properties/${params.id}`, cardToEdit)
            .then ((res) => {
                history.push('/dashboard');
                console.log(res);
            })
            .catch((err) => alert('oopsie teehee, must be an admin', err));
    }

    const onChange = (e) => {
        const { name, value, } = e.target;
        setCardToEdit({
            ...cardToEdit,
            [name]: value,
        })
    }

    return (
        <div className='form-container'>
            <form onSubmit={putProperty}>
                <h2>Edit Your Property</h2>
                <input></input> //need info from backend to finish this.
            </form>
        </div>
    )
}