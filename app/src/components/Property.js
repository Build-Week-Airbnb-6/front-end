import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { xyz } from "../store";
import { axiosWithAuth } from '../util/axiosWithAuth';
import { useParams } from 'react-router-dom';
import Modal from 'react-awesome-modal';


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
            {props.property && (
                <container>
                    {/* property content goes here */}
                </container>
            )}
            <input type='button' value='Edit' onClick={() => openModal()}/>
            <Modal
                visible={visible}
                width='400'
                height='300'
                effect='fadeInUp'
                onClickAway={closeModal}
            >
                <PropertyEdit/>
                <button className='edit-button' onClick={() => closeModal()}>
                    Close
                </button>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        property: state.property,
    }
}

export default connect(mapStateToProps, {xyz})(Property);
