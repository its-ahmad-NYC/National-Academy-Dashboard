import React, { useState } from 'react';
import "./Tuition.css";
import pic1 from "./tuitionassets/pic1.png";
import pic2 from "./tuitionassets/pic2.png";
import pic3 from "./tuitionassets/pic3.png";
import option from "./tuitionassets/opt.png";
import aproval from "./tuitionassets/aproval.png";

function Tuition(props) {
    const tuition = [
        {
            teacher_pic: pic1,
            name: "My Graph",
            post_date: "Posted 1 month ago",
            classes: "Online classes",
            subjects: "Physics, Chemistry, Maths, Islamiyat, Urdu, Biology, Public Administration, Business Administration",
            grade: "Nursery, KG, Class 1 to 5, Class 6 to 8, Class 9, Matric, O Levels, A Levels, Bachelors",
            gender: "Male",
            school: "Army Public School",
            location: "Online",
            id: 1
        },
        {
            teacher_pic: pic2,
            name: "My Graph",
            post_date: "Posted 1 month ago",
            classes: "Online classes",
            subjects: "Physics, Chemistry, Maths, Islamiyat, Urdu, Biology, Public Administration, Business Administration",
            grade: "Nursery, KG, Class 1 to 5, Class 6 to 8, Class 9, Matric, O Levels, A Levels, Bachelors",
            gender: "Male",
            school: "Army Public School",
            location: "Online",
            id: 2
        },
        {
            teacher_pic: pic3,
            name: "My Graph",
            post_date: "Posted 1 month ago",
            classes: "Online classes",
            subjects: "Physics, Chemistry, Maths, Islamiyat, Urdu, Biology, Public Administration, Business Administration",
            grade: "Nursery, KG, Class 1 to 5, Class 6 to 8, Class 9, Matric, O Levels, A Levels, Bachelors",
            gender: "Male",
            school: "Army Public School",
            location: "Online",
            id: 3
        },
    ];

    const [approvals, setApprovals] = useState(Array(tuition.length).fill(false));

    const toggleApproval = (index) => {
        setApprovals(approvals.map((approval, i) => i === index ? !approval : approval));
    };

    return (
        <div>
            <div className='tuition-main'>
                <div className="title-tuition">
                    <h1>{props.text}</h1>
                </div>
                <div className="teacher-cards">
                    {tuition.map((tuitiondata, index) => (
                        <div className="card-detail" key={index}>
                            <div className={`aproval-opt ${approvals[index] ? "show-approval" : "not-show"}`}>
                                <img src={aproval} alt="" />
                            </div>
                            <div className="card-nav">
                                <div className="name-pic">
                                    <img src={tuitiondata.teacher_pic} alt="" />
                                    <div className="name">
                                        <h1>{tuitiondata.name}</h1>
                                        <p id='post'>{tuitiondata.post_date}</p>
                                        <p id='class'>{tuitiondata.classes}</p>
                                    </div>
                                </div>
                                <img onClick={() => toggleApproval(index)} src={option} alt="" />
                            </div>
                            <div className="card-info">
                                <div className="text-card">
                                    <span>Subjects:</span><p>{tuitiondata.subjects}</p>
                                </div>
                                <div className="text-card">
                                    <span>Grade:</span><p>{tuitiondata.grade}</p>
                                </div>
                                <div className="text-card">
                                    <span>Gender:</span><p>{tuitiondata.gender}</p>
                                </div>
                                <div className="text-card">
                                    <span>Alumnus of:</span><p>{tuitiondata.school}</p>
                                </div>
                                <div className="text-card">
                                    <span>Alumnus of:</span><p>{tuitiondata.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tuition;
