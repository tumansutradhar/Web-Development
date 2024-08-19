import React from "react";
import "./App.css";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <h1>My Contacts</h1>
        <Card
          name="Beyonce"
          img="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1713872625~exp=1713876225~hmac=cf135b7aa906c00d9af8696f75ed249eb84837b2a90f7a8a4f53460b04f19c96&w=1800"
          tel="+91 01234 56789"
          email="beyonce@email.com"
        />
        <Card
          name="Jack"
          img="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1713872587~exp=1713876187~hmac=05b0e708a149113953e8dfea7fd828329ef7cb3ee498ebc608918bb1dc7e1fd0&w=1800"
          tel="+91 12345 67890"
          email="jack@email.com"
        />
      </div>
    </>
  );
}

export default App;
