import { Banner } from "./banner/index.js";
import { Schedule } from "./schedule/index.js";
import { ScheduleWife } from "./schedule-wife/index.js";
import { WeddingDay } from "./wedding_day/index.js";
import { Whisper } from "./whisper/index.js";
import { BankCode } from "../bank_code/index.js";
import { Message } from "./message/index.js";
import ImagesComponent from "../images";
import React from "react";
import { Heart } from "../../assets/images";
import { MainWrapper } from './styles.js';

function Home() {

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <MainWrapper>
      <div id="home">
        <Banner />
      </div>
      <Whisper />
      <WeddingDay />
      <div id="timeline">
        <Schedule />
        <ScheduleWife />
      </div>
      {/* <Memory /> */}
      <BankCode />
      <Message />
      <div id="image">
        <ImagesComponent />
      </div>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      {/*  */}
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      {/*  */}
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      {/*  */}
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>
      <span class="heart-falling">
        <img src={Heart} alt=""></img>
      </span>

    </MainWrapper>
  );
}

export default Home;
