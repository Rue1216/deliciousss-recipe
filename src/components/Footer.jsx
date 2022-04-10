import React from 'react';
import styled from 'styled-components';

function Footer() {
    return ( 
        <FooterWrapper>
            <FooterContent>
            <Contact>
                <h4>About</h4>
                <p>
                    Hi, I'm Rue, this is my first React.js kick-off project.<br />
                    If you are interested in my other works or tech articles, welcome to pay a visit at my personal blog and my GitHub:)
                </p>
                <div>
                    <a href="https://rue1216.github.io/">Personal Blog</a>
                    <a href="https://github.com/Rue1216">GitHub</a>
                </div>
            </Contact>
            <Sources>
                <h4>Used Sources</h4>
                <li>Banner Picture: <a href="https://undraw.co/">unDraw</a></li>
                <li>Food APIs: <a href="https://spoonacular.com/food-api">spoonacular</a></li>
                <li>Icons: React-icon</li>
                <li>Motion Effect: framer-motion && splide.js</li>
            </Sources>
            </FooterContent>
            <CopyRight>All rights reserved © 2022 Rue</CopyRight>
        </FooterWrapper>
    );
}

//style
const FooterWrapper = styled.div`
    padding-bottom: 3rem;
    padding-top: 4rem;
    @media(max-width:414px){
        padding-top: 0rem;

    }
`
const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    h4{
        font-size: 1.25rem;
        margin-top: 1.25rem;
        margin-bottom: 0.5rem;
    }
    @media(max-width:768px){
        flex-direction: column;
        align-items: center;
        
    }
    @media(max-width:414px){
        

    }
`
const Contact = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1.5;
    a{
        text-decoration: none;
        margin-right: 1rem;
        font-weight: 500;
        &:hover{
            opacity: 0.8;
        }
    }
    @media(max-width:768px){
        width: 80%;
    }
`
const Sources = styled.ul`
    width:35%;
    a{
        text-decoration: none;
        margin-right: 1rem;
        font-weight: 500;
        &:hover{
            opacity: 0.8;
        }
    }
    @media(max-width:768px){
        width: 80%;
        
    }
    @media(max-width:414px){
        

    }
`
const CopyRight = styled.p`
    text-align: center;
    font-weight: 500;
    margin-top: 2rem;
    color: gray;
    @media(max-width:414px){
        font-size: 0.5rem;
    }
`

export default Footer;