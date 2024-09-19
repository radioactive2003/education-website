import React from "react";
const arr=[
    {name:"William orton",
        company:"Edukun",
        words:`Choosing to pursue my degree at Edukun was one of the best decisions I've ever made. 
                The supportive community, state-of-the-art facilities, 
                and commitment to academic excellence have truly exceeded my expectations.`
    },
    {name:"Dolph zigler",
        company:"Tisco",
        words:`Choosing to pursue my degree at Edukun was one of the best decisions I've ever made. 
                The supportive community, state-of-the-art facilities, 
                and commitment to academic excellence have truly exceeded my expectations.`
    },
    {name:"Maya fernandes",
        company:"Edukun",
        words:`Choosing to pursue my degree at Edukun was one of the best decisions I've ever made. 
                The supportive community, state-of-the-art facilities, 
                and commitment to academic excellence have truly exceeded my expectations.`
    },
    {name:"Marcus",
        company:"Edukun",
        words:`Choosing to pursue my degree at Edukun was one of the best decisions I've ever made. 
                The supportive community, state-of-the-art facilities, 
                and commitment to academic excellence have truly exceeded my expectations.`
    }
];

function Card(props){
    return(
        <li>
        <div>
            <h3>{props.name}</h3>
            <h4>{props.comp}</h4>
            <p>{props.words}</p>
        </div>
    </li>


    );
}
export {Card,arr};