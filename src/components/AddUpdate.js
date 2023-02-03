import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/form.css"
import Navbarreact from './Nav'
import { useNavigate, useParams } from 'react-router-dom';
import firebaseDB from "../firebase";


function AddUpdate() {
    const navitage = useNavigate();
    const [type, setType] = useState("");
    const [type1,setType1]=useState("");
    const initialValues = {
        firstName: '',
        middlename: '',
        lastName: '',
        classes: '',
        division: '',
        rollno: '',
        adress1: '',
        adress2: '',
        landmark: '',
        city: '',
        pincode: '',
        file: null,
        terms: false,
    };
    const [data,setData]=useState(initialValues);
    const {id}=useParams();

    const [state, Setstate] = useState(initialValues);
    const {
        firstName,
        middlename,
        lastName,
        classes,
        division,
        rollno,
        adress1,
        adress2,
        landmark,
        city,
        pincode,
        file,
        terms,
    } = state

    useEffect(()=>{
        firebaseDB.child('students').on('value',(snapshot)=>{
          if(snapshot.val()!=null){
            setData({...snapshot.val()})
          }else{
            setData({})
          }
        })
    
        return ()=>{
          setData({})
        }
      },[]);

    useEffect(()=>{
        if(id){
            Setstate({...data[id]})
        }else{
            Setstate({...initialValues})
        }
    },[id,data])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!id){
            if (!firstName ||
                !lastName ||
                !classes ||
                !division ||
                !rollno ||
                !adress1 ||
                !landmark ||
                !city ||
                !pincode) {
    
                alert("all * fields are required")
            } else {
                firebaseDB.child('students').push(state,(err)=>{
                    if(err){
                        alert(err);
                    }else{
                        alert("added to db");
                    }
                })
                navitage("/");
            }
        }else{
            firebaseDB.child(`students/${id}`).set(state,(err)=>{
                if(err){
                    alert(err);
                }else{
                    alert("updated student record!")
                }navitage("/");
            })
        }
       

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        Setstate({ ...state, [name]: value })
    }

    // const [state, setstate] = useState(initialstate);
    return (
        <>
            <Navbarreact />
            <div className='addupdateform'>
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>First name*</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={firstName || ""}
                                onChange={handleChange}
                            // isValid={touched.firstName && !errors.firstName}
                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>Middle name</Form.Label>
                            <Form.Control
                                type="text"
                                name="middlename"
                                value={middlename || ""}
                                onChange={handleChange}
                            // isValid={touched.middlename && !errors.middlename}
                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik102"
                            className="position-relative"
                        >
                            <Form.Label>Last name*</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={lastName || ""}
                                onChange={handleChange}
                            // isValid={touched.lastName && !errors.lastName}
                            />

                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>



                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>Class*</Form.Label>
                            <Form.Control
                                as="select"
                                value={type || ""}
                                name="classes"
                                onChange={handleChange}
                            >
                                <option>Select Class</option>
                                <option value="1" name="classes" onChange={() => { Setstate({ ...state, [classes]: "1" }) }}>One</option>
                                <option value="2" name="classes" onClick={handleChange}>Two</option>
                                <option value="3" name="classes" onClick={handleChange}>Three</option>
                                <option value="4" name="classes" onClick={handleChange}>Four</option>
                                <option value="5" name="classes" onClick={handleChange}>Five</option>
                                <option value="6" name="classes" onClick={handleChange}>Six</option>
                                <option value="7" name="classes" onClick={handleChange}>Seven</option>
                                <option value="8" name="classes" onClick={handleChange}>Eight</option>
                                <option value="9" name="classes" onClick={handleChange}>Nine</option>
                                <option value="10" name="classes" onClick={handleChange}>Ten</option>
                                <option value="11" name="classes" onClick={handleChange}>Eleven</option>
                                <option value="12" name="classes" onClick={handleChange}>Twelve</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>Division*</Form.Label>
                            <Form.Control
                                as="select"
                                value={type1 || ""}
                                name="division"
                                onChange={handleChange}
                            >
                                <option>Select division</option>
                                <option value="A" name="division" onChange={() => { Setstate({ ...state, [division]: "A" }) }}>A</option>
                                <option value="B" name="division" onClick={handleChange}>B</option>
                                <option value="C" name="division" onClick={handleChange}>C</option>
                                <option value="D" name="division" onClick={handleChange}>D</option>
                                <option value="E" name="division" onClick={handleChange}>E</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik102"
                            className="position-relative"
                        >
                            <Form.Label>Roll No*</Form.Label>
                            <Form.Control
                                type="text"
                                name="rollno"
                                placeholder='Enter Roll number in digits'
                                value={rollno || ""}
                                onChange={handleChange}
                            // isValid={touched.lastName && !errors.lastName}
                            />

                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>



                    <Row className="mb-2">
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>Adress 1*</Form.Label>
                            <Form.Control
                                type="text"
                                name="adress1"
                                placeholder='Adress Line 1'
                                value={adress1 || ""}
                                onChange={handleChange}
                            // isValid={touched.firstName && !errors.firstName}
                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="6"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>Adress 2</Form.Label>
                            <Form.Control
                                type="text"
                                name="adress2"
                                placeholder='Adress Line 2'
                                value={adress2 || ""}
                                onChange={handleChange}
                            // isValid={touched.middlename && !errors.middlename}
                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>


                    </Row>

                    <Row className="mb-3">
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>Landmark*</Form.Label>
                            <Form.Control
                                type="text"
                                name="landmark"
                                value={landmark || ""}
                                onChange={handleChange}
                            // isValid={touched.firstName && !errors.firstName}
                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik101"
                            className="position-relative"
                        >
                            <Form.Label>City*</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={city || ""}
                                onChange={handleChange}
                            // isValid={touched.middlename && !errors.middlename}
                            />
                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group
                            as={Col}
                            md="4"
                            controlId="validationFormik102"
                            className="position-relative"
                        >
                            <Form.Label>Pincode*</Form.Label>
                            <Form.Control
                                type="text"
                                name="pincode"
                                value={pincode || ""}
                                onChange={handleChange}
                            // isValid={touched.lastName && !errors.lastName}
                            />

                            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>
                    {id? <Button type="submit" >Update</Button> : <Button type="submit" >Save</Button>}
                    
                </Form>
            </div></>
    )
}

export default AddUpdate