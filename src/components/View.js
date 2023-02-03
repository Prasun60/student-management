import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbarreact from './Nav'
import firebaseDB from "../firebase";
import Card from 'react-bootstrap/Card';
import "../styles/view.css"
function View() {

    const [student, setstudent] = useState({});
    const { id } = useParams();
    useEffect(() => {
        firebaseDB.child(`students/${id}`).get().then((snapshot) => {
            if (snapshot.exists()) {
                setstudent({ ...snapshot.val() })
            } else {
                setstudent({})
            }
        })
    }, [id])


    return (
        <div>
            <Navbarreact />
            <div className='viewcard'>
                <Card className='viewcardbox'>
                    <Card.Body>
                        <Card.Title className='cardheading'>Student Details</Card.Title>
                        
                        <Card.Text>
                            <div className='container'>
                                <strong>NAME: </strong>
                                <span>{student.firstName} {student.middlename} {student.lastName}</span>
                                <br />
                                <br />
                                <strong>CLASS: </strong>
                                <span>{student.classes}-{student.division}</span>
                                <br />
                                <br />
                                <strong>ROLL NO: </strong>
                                <span>{student.rollno}</span>
                                <br />
                                <br />
                                <strong>ADDRESS 1: </strong>
                                <span>{student.adress1}</span>
                                <br />
                                <br />
                                <strong>ADDRESS 2: </strong>
                                <span>{student.adress2}</span>
                                <br />
                                <br />
                                <strong>CITY: </strong>
                                <span>{student.city}</span>
                                <br />
                                <br />
                                <strong>LANDMARK: </strong>
                                <span>{student.landmark}</span>
                                <br />
                                <br />
                                <strong>PINCODE: </strong>
                                <span>{student.pincode}</span>
                                <br />
                                <br />

                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default View