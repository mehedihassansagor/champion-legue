import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Leagues = (props) => {
    
    const{strSport,strBadge,strLeague,idLeague} = props.league;
    const history = useHistory();

    const showDetails = () => {
        const url = `/leagues/${idLeague}`
        history.push(url);
    }
    

    return (

<div>
  <div className='col-md-4'>
           <Card style={{ width: '20rem' ,marginLeft: '60px' ,marginBottom:'30px',borderRadius:'15px',padding:'20px'}}>
                    <Card.Img variant="top" src= {strBadge} />
                    <Card.Body>
                        <Card.Title>{strLeague}</Card.Title>
                        <Card.Text>
                       <h5> Sports-type: {strSport}</h5>
                    
                        </Card.Text>
                        <Button onClick = {() => showDetails()} variant="primary">Explore</Button>
                    </Card.Body>
                    </Card> 
        </div>

</div>


        
        
           
        
    );
};

export default Leagues;