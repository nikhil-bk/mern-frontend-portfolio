import React,{useContext} from 'react';
import {DataContext} from '../context/GlobalContext';

const Experience = () => {
    const state= useContext(DataContext);
    const [experience] = state.experience;
    // console.log(experience);





    return (
        <div className="main-container">
          <h2 className="title">
              Experience
          </h2>
          <div className="experience">
              <div className="experience-center">

                  {/* static single experience */}
               {experience.map(item=>(
                      <div className="single-experience" key={item._id}>
                      <b>{item?.company_name?.toUpperCase()}</b> 
                      <span style={{fontSize:"16px"}}>:({item?.start_and_end})</span>
                      <p>{item?.job_title}</p>
                      <span>Technology:<i>{item?.technology}</i></span>
                     </div>
               ))}

              

               

               
              </div>
          </div>
        </div>
    )
}

export default Experience
