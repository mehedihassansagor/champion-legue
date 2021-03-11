import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faVolleyballBall, faVenusMars, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import male from '../img/male.png'
import female from '../img/female.png'
import Facebook from '../img/Facebook.png'
import Twiter from '../img/Twitter.png'
import Youtube from '../img/YouTube.png'


const Detail = () => {
   
    const {idLeague} = useParams();
    const [details,setDetail] = useState({});
    
    useEffect(()=>{
            const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
            fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.leagues[0]))

     } ,[idLeague])

    return (
                      <div>
                            <div>
                                    <img  className = "strbanner" src = {details.strBanner} alt = " "/>
                                    <img  className = "strbadge" src = {details.strBadge}  alt = " "/>
                            </div>
  
                <div className = 'container d-flex total-info '>
                      

                      <div className = "info col-md-7">
                      <h4>{details.strLeague}</h4>
                      <h6><FontAwesomeIcon icon={faStopwatch } />  Founded :{details.intFormedYear}</h6>
                      <h6><FontAwesomeIcon icon={faGlobeAsia } />  Country :{details.strCountry}</h6>
                      <h6><FontAwesomeIcon icon={faVolleyballBall }/>  Sports type:{details.strSport}</h6>
                      <h6><FontAwesomeIcon icon={faVenusMars } />  Gender :{details.strGender}</h6>
                      </div>
                       
                       <div className = "conditionImage col-md-5 ">
                           {
                               details.strGender === "Male" ? <img src = {male} alt = " "/> : <img src = {female} alt = " "/>
                           }
                       </div>
                  </div>
 
                  <div className = 'container  explain'>
                  <p>
                      {details.strDescriptionEN}
                  </p>
                  <footer className = "footer-img">
                     <a target= "blank"  href= {"http://" + details.strFacebook}> <img src ={Facebook} alt = " " ></img></a>
                      <a target= "blank" href= {"http://" + details.strYoutube}><img src ={Youtube} alt = " " ></img></a>
                      <a target= "blank" href= {"http://" + details.strTwitter}><img src ={Twiter} alt = " "  ></img></a>
                  </footer>
                  </div>
                 
                    
              </div>

            
    );
};

export default Detail;