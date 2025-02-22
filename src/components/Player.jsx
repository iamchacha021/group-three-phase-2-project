import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {
    const {id} = useParams();
    const [player, setPlayer] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
            setLoading(true);
            fetch(`http://localhost:3000/players/${id}`)
            .then(response => response.json())
            .then (player => setPlayer(player))
            setLoading(false); 
            console.log(player.image)
    }, []);

    const Loading = () => {
        return(
            <>
                Loading.....
            </>
        )
    }

    const ShowPlayer = () => {
        return (
          <>
            <div className="col-md-6">
              <img
                src={player.image}
                alt={player.name}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase text-black-50">{player.type}</h4>
              <h1 className="display-5">{player.name}</h1>
              <p className="lead fw-bolder">
                Club: {player.club} <br/><br/> Salary: {player.salary}
              </p>
              <h3 className="display-6 my-4 fw-bold">
                ${player.value}
              </h3>
              <p className="lead">{player.description}</p>
              <button className="btn btn-dark">
                Bid
              </button>
            </div>
          </>
        );
    }

    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading/> : <ShowPlayer />}
                </div>
            </div>

        </div>
    )
}

export default Player;