import React, { useContext } from 'react';
import { DataContext } from '../context/GlobalContext';

const Experience = () => {
    const state = useContext(DataContext);
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
                    {experience.map((item,idx) => (
                        <div key={idx}className="single-experience">
                            <b >Company : </b>
                            <span>{item.company_name?.toUpperCase()}</span>
                            <br />

                            <b >Period : </b>
                            <span>{item.start_and_end}</span>
                            <br />

                            <b >Location : </b>
                            <span>{item.location}</span>
                            <br />

                            <b >Job Title : </b>
                            <span>{item.job_title}</span>
                            <br />

                            <b >Technologies : </b>
                            <span>{item.technology}</span>


                        </div>
                    ))}






                </div>
            </div>
        </div>
    )
}

export default Experience
