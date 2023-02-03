import React, { useEffect, useState } from 'react'
import Navbarreact from './Nav'
import firebaseDB from "../firebase";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { AiFillEdit,AiFillDelete,AiFillEye } from "react-icons/ai";

function Home() {

  const [data,setData]=useState({});
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

  const onDelete=(id)=>{
    if(window.confirm("Are you sure you want to delete student data!")){
      firebaseDB.child(`students/${id}`).remove((err)=>{
        if(err){
          alert(err);
        }else{
          alert("student record deleted");
        }
      })
    }
  }


  return (
    <div>
        <Navbarreact />
        <div style={{"width":"85%","margin":"auto","marginTop":"40px","display":"flex"}}><strong>Manage Students</strong></div>
        <Table striped bordered hover style={{"width":"85%","margin":"auto","marginTop":"50px"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Class</th>
          <th>Roll No</th>
          <th>View/Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((id,index)=>{
          return (
            <tr key={id}>
              <td>{data[id].firstName} {data[id].middlename} {data[id].lastName}</td>
              <td>{data[id].classes}-{data[id].division}</td>
              <td>{data[id].rollno}</td>
              <td >
                <Link to={`/view/${id}`}style={{"paddingRight":"20px"}}>
                  <AiFillEye />
                </Link> 
                <Link to={`/update/${id}`}style={{"paddingRight":"20px"}}>
                  <AiFillEdit />
                </Link> 
                
                  <AiFillDelete onClick={()=>onDelete(id)}/>
                
              </td>
            </tr>
          )
        })}
        
      </tbody>
    </Table>
    </div>
  )
}

export default Home