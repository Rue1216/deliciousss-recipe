import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import{ useParams, Link } from 'react-router-dom'
import styled from 'styled-components';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name)=>{
        //fetch data
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=12&query=${name}`)
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);

    };

    useEffect(()=>{
        getSearched(params.search)
    },[params.search])

    return ( 
        <Grid
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            {searchedRecipes.map((item)=>{
                return(
                    <Link key={item.id} to={`/recipe/${item.id}`}>
                        <Card>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Card>
                    </Link>
                )
            })}
        </Grid>
     );
}

//style
const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    grid-gap: 3rem;
    margin-bottom: 3rem;
`
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
        &:hover{
            opacity: 0.8;
        }
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Searched;