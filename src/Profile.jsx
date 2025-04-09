import React from "react";
import viteLogo from "./assets/react.svg";


const Profile = ({ProfileLst}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        backgroundColor:"",
        width:"400px",
        height:"400px",
        paddingTop:"10%"
      }}
    >
      <div
        style={{
          margin: "0 auto",
          justifyContent: "center",
          textAlign: "left",
          padding: "30px",
          border: "2px solid ",
          borderRadius: "10px",
          width: "290px",
          backgroundColor: "yellow",
          boxShadow: "0 4px 8px rgba(4, 81, 17, 0.2)",
        }}
      >
       <div style={{textAlign:"right",}}><img
          style={{
            border: "2px solid black",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            
          }}
          src={viteLogo}
        /></div> 
        <div>
          <span>Name : </span>
          <span>{ProfileLst.name}</span>
        </div>
        <div>
          <span>Department : </span>
          <span>{ProfileLst.Department}</span>
        </div>
        <div>
          <span>Year : </span>
          <span>{ProfileLst.year}</span>
        </div>
        <div>
          <span>Mobile : </span>
          <span>{ProfileLst.mobile}</span>
        </div>
        <div>
          <span>Address : </span>
          <span>{ProfileLst.address}</span>
        </div>
        <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank">LINKEDIN Profile</a>
      </div>
      
    </div>
  );
};

export default Profile;
