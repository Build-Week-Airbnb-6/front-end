import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../util/axiosWithAuth';
import { useParams } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import { xyz } from '../store'

function Property (props) {
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true)
    };

    const closeModal = () => {
        setVisible(false)
    };

    const id = useParams().id;

    useEffect(() => {
        props.xyz(id);
    }, []);

    return (
        <div>

        </div>
    )
}
