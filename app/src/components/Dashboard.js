import React, { useState, useEffect } from "react" 
import axios from "axios"
const Dashboard = () => {
    const [state, setStates] = useState([])
    useEffect(() => {
      axios.get("https://swapi.dev/api/people/")
        .then(res => {
          console.log(res.data.results)
          setStates(res.data.results);
        })
        .catch(err => {
          
        })
    }, []) 
    return (
        <div className="App">
          <h1 className = "Header">Characters</h1>
          <div className="content">
          {state.map((character, index) => {
                    return(
                    <div className = "names">
                        <h2>{character.name}</h2>
                    </div>
                    )
                })}
          </div>
        </div>
    );
  }
export default Dashboard