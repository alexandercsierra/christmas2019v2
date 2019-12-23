import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import PostcardHan from './PostcardHan';
import styled from 'styled-components'
import holiday from './imgs/holidaycard.jpg'
import hannukah from './imgs/hannukard.jpg'
import lights from './imgs/lights.jpg'
import PostcardChris from './PostcardChris'
import PostcardHol from './PostcardHol'

let Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // border: 1px solid red;
`;


const Card = (props) => {
    const {holiday, setHoliday} = props;
    let textColor = "white"
    const {id} = useParams();
    const [code] = useState(id);
    const [front, setFront] = useState("");

    if (id.includes("hannukah")){
        textColor="white";
        setHoliday("hannukah");
        // setFront("hannukah");
    } else if (id.includes("christmas")){
        textColor="white";
        setHoliday("christmas");
    } else if (id.includes("holiday")){
        textColor="black";
        setHoliday("holiday");
    }
    return (
        <Div>
            <h1 style={{color:`${textColor}`}}>{`I'm a card at this id: ${id}`}</h1>
            
            {holiday === "hannukah" && <PostcardHan code={code}/>}
            {holiday === "christmas" && <PostcardChris />}
            {holiday === "holiday" && <PostcardHol />}
        </Div>
    )
}

export default Card