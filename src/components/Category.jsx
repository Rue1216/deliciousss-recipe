import React from 'react';
import {} from 'react-icons'
import styled from 'styled-components'
//import icons
import { GiNoodles, GiHamburger, GiPizzaSlice, GiChiliPepper } from 'react-icons/gi'
//import routing
import { NavLink } from 'react-router-dom'


function Category() {
    return ( 
        <React.Fragment>
            <List>
                <SLink to={'/cuisine/Thai'}>
                    <GiChiliPepper/>
                    <h4>Thai</h4>
                </SLink>
                <SLink to={'/cuisine/Italian'}>
                    <GiPizzaSlice/>
                    <h4>Italian</h4>
                </SLink>
                <SLink to={'/cuisine/American'}>
                    <GiHamburger/>
                    <h4>American</h4>
                </SLink>
                <SLink to={'/cuisine/Japanese'}>
                    <GiNoodles/>
                    <h4>Japanese</h4>
                </SLink>
            </List>
        </React.Fragment>
     );

}
const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 8rem;
    height: 8rem;
    cursor: pointer;
    transform: scale(0.6);
    
    h4{
        color: white;
    }

    svg{
        color: white;
        font-size: 2rem;
    }
    &:hover{
        background: linear-gradient(to right, #f27121, #e94057);
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        svg{
            color: white;
        }
        h4{
            color: white;
        }
    }
    @media(max-width:768px){
       width: 6rem;
       height: 6rem;
    }
    @media(max-width:414px){
       width: 5rem;
       height: 5rem;
       transform: scale(0.7);
    }
`

export default Category;