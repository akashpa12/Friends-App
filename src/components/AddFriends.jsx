import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddFriends = () => {
    const [data,setData]=useState(
        {
            
                "name": "Ramesh",
                "friendName": "Tovino",
                "friendNickName":"TT",
                "DescribeYourFriend":"Test desc"
        }

    )
    const inputHANDLER=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
            
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success")
                         {
                            alert("success")
                        
                    } else {
                        alert("Error")
                        
                    }
                }
            
        ).catch().finally()

    }
    

    
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHANDLER}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                            <label htmlFor="" className="form-label">Friend Name</label>
                            <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                            <label htmlFor="" className="form-label">Friend Nick Nmae</label>
                            <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHANDLER}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                            <label htmlFor="" className="form label">Discribe Your Friend</label>
                            <input type="text" className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputHANDLER} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6-col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFriends