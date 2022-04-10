import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function Search() {

    //get the input value
    const [ input, setInput ] = useState("");
    //navigation
    const navigate = useNavigate();

    //submit handler
    const submitHandler = (event) =>{
        event.preventDefault()
        navigate(`/searched/${input}`);
        
    }

    return ( 
        <FormStyle onSubmit={submitHandler}>
            <React.Fragment>
                <BiSearchAlt2/>
                <input
                    type="text"
                    placeholder='What you want to have today?'
                    onChange={(event)=>setInput(event.target.value)}
                    value={input}    
                />
            </React.Fragment>
        </FormStyle>
        
     )
}

//component style
const FormStyle = styled.form`
    margin: 0 auto;
    width: 70%;
    position: relative;
    input{
        width:100%;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 0.75rem;
        outline: none;
    }
    svg{
        position: absolute;
        font-size: 1.25rem;
        color:white;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
    }
    @media(max-width:768px){
        width: 80%;
        input{
            font-size: 0.75rem;
        }
    }
    @media(max-width:414px){
        width: 96%

    }

`

export default Search;