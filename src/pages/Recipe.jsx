import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

function Recipe() {
    
    let params = useParams();
    const [ details, setDetails ] = useState({});
    const [ activeTab, setActiveTab ] = useState('instructions')

    //fetch recipes
    const fetchDetails = async () =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`)
        const detailData = await data.json()
        setDetails(detailData)
    }
    useEffect(()=>{
        fetchDetails(params.name)
    },[params.name])

    let { title, image, servings, readyInMinutes, nutrition, extendedIngredients, summary, instructions, analyzedInstructions } = details
    
   
    return ( 
        <DetailWrapper
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Info>
            <h2>{ title }</h2>
            <img src={image} alt={title} />
            </Info>
            <Content>
                <ButtonWrapper>
                    <Button className={ activeTab === 'instructions' ? 'active': ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
                    <Button className={ activeTab === 'ingredients' ? 'active': ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
                    <Button className={ activeTab === 'procedures' ? 'active': ''} onClick={()=> setActiveTab('procedures')}>Detailed Info</Button>
                </ButtonWrapper>
                <article>
                {activeTab === 'instructions' && (
                    <>
                        <h3>Summary</h3>
                        <p dangerouslySetInnerHTML={{__html: summary}}/>
                        <h3>Instructions</h3>
                        <p dangerouslySetInnerHTML={{__html: instructions}}/>
                    </>
                )}

                {activeTab === 'ingredients' && (
                    <>
                        <h3>Suggestion</h3>
                        <p>Ready in minutes: {readyInMinutes}</p>
                        <p>Servings: {servings}</p>

                        <h3>Nutrition</h3>
                        <article>
                            {nutrition.nutrients.map((item)=>{
                                let { name, amount, unit } = item;
                                switch(name){
                                    case 'Calories':
                                        return <p key={name}>{name}: {amount}{unit}</p>
                                    case 'Fat':
                                        return <p key={name}>{name}: {amount}{unit}</p>
                                    case 'Saturated Fat':
                                        return <p key={name}>{name}: {amount}{unit}</p>
                                    case 'Carbohydrates':
                                        return <p key={name}>{name}: {amount}{unit}</p>
                                    case 'Sugar':
                                        return <p key={name}>{name}: {amount}{unit}</p>
                                    case 'Protein':
                                        return <p key={name}>{name}: {amount}{unit}</p>
                                }
                            })}
                        </article>

                        <h3>Ingredients</h3>
                        <ul>
                            {extendedIngredients.map((ingredient)=>(
                                <li key={ingredient.id}>{ingredient.original}</li>
                            ))}
                        </ul>
                    </>  
                )}
                   
                {activeTab === 'procedures' && (
                    <>
                        <h3>Detailed Steps</h3>
                        <article>
                        {analyzedInstructions.map((item)=>(
                            item.steps.map((eachProcedure=>(
                                <ul>
                                    <li key={eachProcedure.number}>{eachProcedure.step}</li>
                                </ul>
                            )))
                        ))}
                        </article>
                    </>
                )}
                </article>
                
            </Content>
        </DetailWrapper>
    );
}

//style
const DetailWrapper = styled(motion.div)`
    margin-top: 6rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h3{
        margin-top: 2.5rem;
    }
    ul{
        margin-top: 0;
    }
    li{
        margin-bottom: 1rem;
        font-size: 1.2rem;
        line-height: 1.5;
    }
    @media(max-width:960px){
        margin-top:4rem;
        margin-bottom:4rem;
    }
    @media(max-width:768px){
        flex-direction: column;
        align-items: center;
    }
    @media(max-width:414px){
        h3{
            margin-top: 1.5rem;
        }
        li{
            font-size: 1rem;
            line-height: 1.25;
            margin-bottom: 0.5rem;
        }
    }
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    @media(max-width:768px){
        justify-content: space-around;
        margin-top: 4rem;
    }
    @media(max-width:414px){
        flex-direction: column;
        margin-top:2rem;
    }
`
const Button = styled.button`
    padding: 0.75rem 1rem;
    color: #313131;
    background: white;
    margin-right: 1rem;
    border: 2px solid #494949;
    display: block;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        border: 2px solid #f27121;
        background: linear-gradient(to right, #f27121, #e94057);
        color: white;
    }
    @media(max-width:960px){
        padding: 0.5rem 0.75rem;
    }
    @media(max-width:768px){
        padding: 0.25rem 0.5rem;
        margin-right: 0rem;
    }
    @media(max-width:414px){
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
`
const Content = styled.div`
    width:70%;
    margin-left: 5%;
    p{
        line-height: 1.75;
        letter-spacing: 1px;
    }
    @media(max-width:768px){
        width: 85%;
        margin-left: 0%;
    }
    @media(max-width:414px){
        p{
            line-height: 1.5;
            letter-spacing: 0.5px;
        }
    }
`
const Info = styled.div`
   width:25%;
    img{
        width: 100%;
        height: auto;
        border-radius: 1rem;
    }
    @media(max-width:768px){
        width: 85%;
    }
`

export default Recipe;