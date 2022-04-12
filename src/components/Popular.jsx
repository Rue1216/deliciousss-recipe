import { useEffect, useState } from "react"
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'

function Popular() {

    const [ popular, setPopular ] = useState([]);

    //get the data be used
    useEffect(()=>{
        getPopular();
    },[])

    const getPopular = async ()=>{
        //use LocalStorage
        const check = localStorage.getItem('popular');

        if(check){
            setPopular(JSON.parse(check));
        }else{
            //fetch data form spoonacular
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
            const data  = await api.json();

            localStorage.setItem('popular', JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }
        
    }
    return ( 
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap:'3rem',
                    breakpoints:{
                        960:{
                            perPage: 2,
                        },
                        414:{
                            perPage: 1,
                        },
                    }
                }}>
                    {popular.map((recipe)=>{
                        return(
                            <SplideSlide key={recipe.id}>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <Card>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient/>
                                    </Card>
                                </Link>
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </Wrapper>
        </div>
     );
}

// styled setting
const Wrapper = styled.div`
    margin: 4rem 0rem;
`;
const Card = styled.div`
    min-height: 15rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
    &:hover{  
        background: -webkit-linear-gradient(38deg, rgba(231, 48, 0, 0.5), rgba(255, 131, 0, 0));
        background: linear-gradient(38deg, rgba(231, 48, 0, 0.5), rgba(255, 131, 0, 0));
    }
`;

export default Popular;