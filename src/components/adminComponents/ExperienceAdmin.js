
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './admin.css';




const ExperienceAdmin = () => {

    const [experience, setExperience] = useState({ company_name: "", start_and_end: "", job_title: "", technology: "" });
    const [experienceData, setExperienceData] = useState([]);
    const [message, setMessage] = useState('');
    const [messageCond, setMessageCond] = useState(false);


    useEffect(() => {

        // fetching data
        const fetchData = async () => {

            try {

                const res = await axios.get(`/experience`);
                //  console.log(res.exprerience);
                setExperienceData(res.data);

            } catch (err) {

            }

        }

        fetchData();

    }, [])


    // onchange
    const onchangeExperience = (prop, value) => {
        setExperience({ ...experience, [prop]: value })
        // console.log(experience);
    }


    // submit experience
    const handleSubmit = (e) => {
        e.preventDefault();

       
        console.log("experience==", experience)


        setExperience({ company_name: "", start_and_end: "", job_title: "", technology: "" });
        axios.post(`/experience`, experience)
            .then(res => {

            })
            .catch(err => console.log(err))



    }



    // delete about
    const deleteExperience = (id) => {

        axios.delete(`/experience/${id}`)
            .then(res => {
                setMessageCond(true);
                setMessage(`${res.data.msg}`);

                const timeout = setTimeout(() => {
                    setMessage('');
                    setMessageCond(false);

                }, 2000)

                return () => clearTimeout(timeout);


            }).catch(err => console.log(err))



        // delete fro ui
        const experienceFilterDel = experienceData.filter(item => item._id !== id)

        setExperienceData(experienceFilterDel);


    }












    return (

        <div className="same-component" >
            <div className="same-form">
                <form onSubmit={handleSubmit}>
                    <h4>Experience component</h4>
                    <label htmlFor="text">Company Name</label>
                    <input type="text" onChange={(e) => onchangeExperience("company_name", e.target.value)} value={experience?.company_name} />
                    <label htmlFor="text">Start-End</label>
                    <input type="text" onChange={(e) => onchangeExperience("start_and_end", e.target.value)} value={experience?.start_and_end} />
                    <label htmlFor="text">Job Title</label>
                    <input type="text" onChange={(e) => onchangeExperience("job_title", e.target.value)} value={experience?.job_title} />
                    <label htmlFor="text">Technology</label>
                    <input type="text" onChange={(e) => onchangeExperience("technology", e.target.value)} value={experience?.technology} />

                    <button type="submit">Add item</button>
                </form>
            </div>

            <div className="same-item">
                <div className="about-info">
                    {experienceData.map(item => (
                        <div className="same-admin" key={item._id}>
                            <div className="icons">
                                <Link to={`/editExperience/${item._id}`}><i className="fas fa-edit"></i></Link>
                                <i className="fas fa-trash" onClick={() => deleteExperience(item._id)}></i>
                            </div>
                            {/* single experience */}
                            <div className="single-experience">
                                <b>{item.company_name?.toUpperCase()}</b>
                                <span style={{ fontSize: "16px" }}>:({item.start_and_end})</span>
                                <p>{item.job_title}</p>
                                <span>Technology:<i>{item.technology}</i></span>


                            </div>
                            <h3 className={messageCond ? "new-delete item-delete-tab" : "item-delete-tab"}>{message}</h3>
                        </div>


                    ))}
                </div>
            </div>



        </div>
    )
}

export default ExperienceAdmin
