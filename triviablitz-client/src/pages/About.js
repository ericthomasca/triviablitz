import React from 'react';


export function AboutPage(){
    return (        
    <>
        <div style={{color: "black", textAlign: "center"}}>        
        <h1 style={{fontSize: "300%", fontFamily: "monospace"}}><strong>ABOUT TRIVIABLITZ!</strong></h1>
        <br></br>
        <p style={{ border: "solid 4px #4D545E", background: "grey", padding: "6px"}}>
        <strong>Triviablitz</strong> is a daily trivia game using MERN (MongoDB, Express, React, NodeJS). 
            The goal is to play daily as often as you can (once per 24 hours) and accumulate as many points as possible during the 3 rounds, 
            adding them to your monthly leaderboard score.   
            The player will have 30 seconds to attempt three random questions of increasing difficulty with points equalling 1, 3, and 5 during respective rounds. 
            Get them all and you will add a maximum daily total of 9 points to your leaderboard total.
            But be careful how you choose! 
            An incorrect answer will result in your daily round coming to an end and you will add only the points you have accumulated in the given round. </p> 
        
        <br></br>
        <footer>Written by Dawson Mercer, Eric Thomas, and Stephen Walsh &#169;2022</footer>

        
        </div>   
    </>
    )
}

export default AboutPage;