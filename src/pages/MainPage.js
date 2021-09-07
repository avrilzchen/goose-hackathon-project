import React from 'react';
import Header from '../components/Header';
import Fact from '../components/Fact';

function MainPage(){
    return (
        <div>
            <Header />
            <Fact 
                factText = "SPEED" 
            />
            <Fact 
                factText = "EYES" 
            />
            <Fact 
                factText = "LIFESPAN" 
            />
            <Fact 
                factText = "DISTANCE" 
            />
            <Fact 
                factText = "LOYALTY" 
            />
            <Fact 
                factText = "SPECIES" 
            />
            <Fact 
                factText = "AGE" 
            />
        </div>
    )
}

export default MainPage;