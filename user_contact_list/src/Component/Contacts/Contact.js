import React, { useState } from 'react'
import './Contact.css'

export default function Contacts(props) {
    const [isClicked, setIsClicked] = useState()

    if(isClicked){
        return (
            <div className="card">
                <img src={ props.picture } alt='Profile' />
                <div className="container">
                    <p>{ props.firstName }</p>
                    <p>{ props.lastName }</p>
                    <div className="extra">
                        
                        <p>Address: {props.streetNum} {props.streetName}</p>
                        <p>City: {props.city}</p>
                        <p>State: {props.state}</p>
                        <p>Country: {props.country}</p>
                        <p>Postcode: {props.postcode}</p>
                    </div>
                    <p className="extra">Email: {props.email}</p>
                    <p className="extra">Phone: {props.phone}</p>
                    <p className="extra">Cell: {props.cell}</p>
                    <button onClick={() => setIsClicked(false)}>Show Details</button>
                </div>
            </div>
        )
    } else{ 
        return(
            <div className="card">
                <img src={ props.picture } alt='Profile' />
                <div className="container">
                    <p>{ props.firstName }</p>
                    <p>{ props.lastName }</p>
                    <button onClick={() => setIsClicked(true)}>Show Details</button>
                </div>
            </div>
        )    
    }
  }