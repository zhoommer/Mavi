import React from "react";
import ReactPlayer from "react-player";
import "./home.css";
import { Link } from "@mui/material";
const Home = () => {
  return (
    <div className="mt-2">
      <div>
        <ReactPlayer
          url={"https://mavi-p.mncdn.com/videos/semtwb.mp4"}
          width={"100%"}
          height={"100%"}
          controls={true}
        />
      </div>

      <div className="content-2"></div>

      <div style={{backgroundColor: "black"}}>
        <div className="text-white text-center fs-3">Mavi X S.E.M.T</div>
        <div className="text-white text-center">
          Sokağın sesine kulak veren tasarımlarıyla bizi semtte yolculuğa
          çıkarıyor.
        </div>
        <div className="text-white text-center fw-bold fs-5">#MaviXSemt</div>
        <div className="text-center">
          <Link href="#" className="text-white fw-bold" underline="always">Keşfetmen için seni bekliyor</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
