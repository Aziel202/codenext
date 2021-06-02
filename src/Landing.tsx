import React from "react"
import {Link} 
from 'react-router-dom';


export class Landing extends React.Component {
  render(){
    return <div>
      <h1>SoleBalance</h1>
      <p> This is a social media website about shoes where you can also buy and sell shoes with customers. Shoes have a variety of new and used. When a person has some shoes to sell, they can post it and get requests from customers to discuss thier deal. You can like, post and share and interact with posts. And you can also message people. Also your feed is going to consist of shoes that you are interested in. When setting up your profile you are ging to be asked the basics to match your profil with shoes. Size, brands your interested in and others like that. And when selling shoes you are asked for some pictures, price and conditions of the shoes. Click the link below to join the best shoes website and join the SoleWorld</p>
      <Link to="/messages">SoleBalance</Link>
      <div className="middleArea">
      <img src="https://images.unsplash.com/photo-1612705969877-77a3033d93cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=526&q=80" alt="" className="bigPicture1" />
      <img src="https://images.unsplash.com/photo-1612705969877-77a3033d93cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=526&q=80" alt="" className="bigPicture2" />
      <img src="https://images.unsplash.com/photo-1612705969877-77a3033d93cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=526&q=80" alt="" className="bigPicture3" />
      <img src="https://images.unsplash.com/photo-1612705969877-77a3033d93cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=526&q=80" alt="" className="bigPicture4" />
    </div>
    <button className="">
          <a href="">
            <img src="https://sneakerbardetroit.com/wp-content/uploads/2020/04/Air-Jordan-12-University-Gold-130690-070-2020-Release-Date.jpg" alt="" />
            <h3>Air Jordan 12 "University Black Gold"</h3>
            <h4>Used</h4>
            <h3>$139.00</h3>
            <h3>From <h3 className="usernames">@alexkicks</h3></h3>
          </a>
        </button>
    </div>
    
  }
}