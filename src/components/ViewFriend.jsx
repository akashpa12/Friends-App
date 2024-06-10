import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewFriend = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response)=>{
                changedata(response.data)
            }
        ).catch(
          (error)=>{
            console.log(error.messege)
            alert(error)

          }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
  <thead>
    <tr>
    <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">friendName</th>
      <th scope="col">friendNickName</th>
      <th scope="col">DescribeYourFriend</th>
      <th scope="col">__v</th>
    </tr>
  </thead>
  {data.map(
    (value,index)=>{
        return <tbody>

        <tr>
            <th>{value._id}</th>
          <th>{value.name}</th>
          <td>{value.friendName}</td>
          <td>{value.friendNickName}</td>
          <td>{value.DescribeYourFriend}</td>
          <td>{value.__v}</td>
        </tr>
      </tbody>
    }
  )

  }
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewFriend