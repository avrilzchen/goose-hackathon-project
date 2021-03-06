import React, {useState} from 'react';
import honk from '../sounds/honk.ogg';

function getFunFact(SELECTOR) {
    switch(SELECTOR){
        case "SPECIES":
            return 'There are about 30 species of geese worldwide.';
        case "EYES":
            return 'Geese can sleep with one eye open, only needing half their brain to shut down to rest.';
        case "DISTANCE":
            return 'They fly up to 5000km when migrating.';
        case "SPEED":
            return 'Geese fly at speed of about 65km/hr, but can go up to 110km/h if they catch a strong tailwind.';
        case "LIFESPAN":
            return 'Geese live anywhere from 10 to 25 years.';
        case "LOYALTY":
            return 'Geese are loyal creatures and mate for life. They’re very protective of their partners and offspring, refusing to leave their side if something goes wrong.';
        case "AGE":
            return 'Geese existed some 10-12 million years ago.';
        default:
            return 'bruh something is wrong';
    }
}

function Fact(props){
    const [clicked, setClicked] = useState(false);

    const revealFact = () => {
        setClicked(true);
        var honkSound = new Audio(honk);
        honkSound.play();
    }

    var factText = getFunFact(props.factText);
    console.log(factText);
    return(
        clicked ? 
          <p className={"fact"}>
               {factText}
          </p>
          :
          <p className={"fact"} onClick={() => revealFact()}>
            GOOSE FACT
          </p>
    )
}

export default Fact;

