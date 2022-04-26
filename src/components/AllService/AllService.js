import React from 'react';
import './AllService.css';

const AllService = ({service}) => {
    const {discription, image}= service;
    return (
        <div className='allService-container'>
           
            <img src={image} alt="" />
            <div className='p-container'><p className='text'>{discription}</p></div>
        </div>
    );
};

export default AllService;