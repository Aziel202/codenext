import React from 'react';
import './App.css';

function HomePageEx() {
  return (
    <div>
    <h3 className="navTitle">SoleBalance</h3>
    <div className="topnav">
      <a className="active" href="">Home</a>
      <a href="/post">Post</a>
      <a href="/messages">Messages</a>
      <>
        <form action="/action_page.php">
          <div className="search-container">
            <input type="text" placeholder="Search.." name="search"></input>
            <button type="submit"><i className="submitButton"></i>Submit</button>
          </div>
        </form>

      </>
      {/* flex mt-2 space-x-2 */}
    </div>
    <div className="middleArea">
      <img src="https://images.unsplash.com/photo-1612705969877-77a3033d93cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=526&q=80" alt="" className="bigPicture1" />
      <img src="https://images.unsplash.com/photo-1612705969877-77a3033d93cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=526&q=80" alt="" className="bigPicture2" />
      <img src="https://images.unsplash.com/photo-1612705969877-77a3033d93cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=526&q=80" alt="" className="bigPicture3" />
      <img src="https://images.unsplash.com/photo-1612705969877-77a3033d93cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=526&q=80" alt="" className="bigPicture4" />
    </div>
    <div className="title">
      <h1>
        SoleBalance
      </h1>
    </div>
    <>
      <div className="examples">
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
      <div className="examples">
        <button className="">
          <a href="">
            <img src="https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_air-jordan-11-concord-2018-0.jpg" alt="" />
            <h3>Air Jordan 11 Retro "Concord"</h3>
            <h4>New</h4>
            <h3>$320.00</h3>
            <h3>From <h3 className="usernames">@daniel</h3></h3>
          </a>
        </button>
      </div>
      <div className="examples">
        <button className="">
          <a href="">
            <img src="https://images-na.ssl-images-amazon.com/images/I/71%20J8FNRVbL._UX500_.jpg" alt="" />
            <h3>Air Jordan 4 "Military Blue"</h3>
            <h4>Used</h4>
            <h3>$200.00</h3>
            <h3>From <h3 className="usernames">@floki9</h3></h3>
          </a>
        </button>
      </div>
    </>
    </div>
  );
}





export default HomePageEx;



