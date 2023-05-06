import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


const EditExperience = (props) => {

    const [experience, setExperience] = useState({ company_name: "", start_and_end: "", job_title: "", technology: "" });
    const [message, setMessage] = useState('');
    const history = useHistory();
    const { id } = useParams();


    // getting the specific id
    useEffect(() => {

        axios.get(`/experience/${id}`)
            .then(res => {
                setExperience(res.data);
            }).catch(err => console.log(err))


    }, [id])

    // onchange
    const onchangeExperience = (prop, value) => {
        setExperience({ ...experience, [prop]: value })
        // console.log(experience);
    }


    // update about

    const updateExperience = (e) => {
        e.preventDefault();

       

        axios.put(`/experience/update/${props.match.params.id}`, experience)
            .then(res => {
                setMessage(res.data.msg);

            }).catch(err => console.log(err))

        // setExperience('');

        const timeout = setTimeout(() => {
            history.push("/admin");
        }, 2000)

        return () => clearTimeout(timeout);

    }



    return (
        <div className='edit'>
            <div className="main-container">
                <div className="same-component">
                    <div className="same-form">
                        <form onSubmit={updateExperience}>
                            <h3 className="updated">{message}</h3>
                            <h4>Experience component</h4>
                            <label htmlFor="text">Company Name</label>
                            <input type="text" onChange={(e) => onchangeExperience("company_name", e.target.value)} value={experience?.company_name} />
                            <label htmlFor="text">Start-End</label>
                            <input type="text" onChange={(e) => onchangeExperience("start_and_end", e.target.value)} value={experience?.start_and_end} />
                            <label htmlFor="text">Job Title</label>
                            <input type="text" onChange={(e) => onchangeExperience("job_title", e.target.value)} value={experience?.job_title} />
                            <label htmlFor="text">Technology</label>
                            <input type="text" onChange={(e) => onchangeExperience("technology", e.target.value)} value={experience?.technology} />
                            <div className="btns">
                                <button type="submit" >Update item</button>
                                <Link to="/admin"><button className="cancel-btn">Cancel</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditExperience
