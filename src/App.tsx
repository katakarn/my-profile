import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

function App() {
  const header = [(
    <img style={{
      width: "100px",
      height: "100px",
      objectFit: "cover",
    }} alt="Card" src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.6435-9/30688704_1698280423571260_434963986744606720_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE8JxooTMhCgJUYOjmrV9kmvpG8R9Tlprm-kbxH1OWmuYJhpkvlbcbt_EsLT-DwrlyXbk__-9PCLYZvzy-zjV0-&_nc_ohc=L3wTL_gfEqAAX9r-6hc&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfCqU8XrfRJgtOo7htOIj9RqdbPeQwALgBVpleHsTkzV_A&oe=63A8555F" />
  ), (
    <img style={{
      width: "100px",
      height: "100px",
      objectFit: "cover",
    }} alt="Card" src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.6435-9/34399600_1577266005719729_5631278960638689280_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGI-42iEMvLWhTYOpIJVPTx7BwZ5IggLovsHBnkiCAui9k4DCZSnClTShn48oN2SFvwUe18WC43aCbPQnFaqcIq&_nc_ohc=Vh434OOYv7AAX9MJ2mZ&_nc_oc=AQklVFkA6sGE81IDrwIh_W2pfFxNqM7JmnAb_7gmnEMtN2CT0ot8XAQ7ug_1oTiKnG4&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfCLPt7HlIrMswv-3ovqIY8XUilZ6Ylt884WrvznPRNF5w&oe=63A8335B" />
  )];

  const footer = [(
    <span>
      <Button label="Info" icon="pi pi-heart-fill" style={{
        width: "79px",
        height: "23px",
        margin: "-13px",
        padding: "13px",
      }} onClick={() => window.location.href = 'https://www.facebook.com/pond.bangpain'} />
    </span>
  ), <span>
    <Button label="Info" icon="pi pi-heart-fill" style={{
      width: "79px",
      height: "23px",
      margin: "-13px",
      padding: "13px",
    }} onClick={() => window.location.href = 'https://www.facebook.com/profile.php?id=100003090333782'} />
  </span>];
  return (
    <div className="App" style={{ background: "#f5f5f7" }}>
      <div className='nevbar' style={{
        backgroundColor: "rgb(48 48 48)",
        padding: "0px",
        fontFamily: "Arial",
        display: "flex",
      }}>
        <img style={{
          height: "50px",
          marginLeft: "-8px",
        }} src="https://www.pngall.com/wp-content/uploads/11/Apple-Logo-Background-PNG.png" alt="unknown" />
      </div>

      <div className="card" style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}>
        <Card style={{
          color: "#1d1d1f",
          maxWidth: "150px",
          maxHeight: "350px",
          borderRadius: "20px",
          boxShadow: "rgb(0 0 0 / 75%) 6px 6px 0px 0px",
          padding: "0px",
        }} footer={footer[0]} header={header[0]}>
          <h1 style={{ fontSize: "15px" }}>Chayanon Pond</h1>
          <p className="m-0" style={{ lineHeight: '1.5', margin: '0px', fontSize: "12px", padding: "0px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis</p>
        </Card>
        <Card style={{
          color: "#1d1d1f",
          maxWidth: "150px",
          maxHeight: "350px",
          borderRadius: "20px",
          boxShadow: "rgb(0 0 0 / 75%) 6px 6px 0px 0px",
          padding: "0px!important",
          margin: "0p!importantx",
        }} footer={footer[1]} header={header[1]}>
          <h1 style={{ fontSize: "15px" }}>Anupap Guy</h1>
          <p className="m-0" style={{ lineHeight: '1.5', margin: '0px', fontSize: "12px", padding: "0px!important" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis</p>
        </Card>
      </div>


    </div >
  );
}

export default App;