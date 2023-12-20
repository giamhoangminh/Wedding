import styled from "styled-components";
export const MainWrapper = styled.div`
    // position: relative;
    .heart-falling {
      position: absolute;
      z-index: 2000;
      animation: falling 60s infinite linear;
      color: pink;
      font-size: 50px;
    }
    .heart-falling:nth-of-type(1) {
      left: 10%;
      bottom: 600px;
      animation: falling 40s infinite linear;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .heart-falling:nth-of-type(2) {
      left: 20%;
      bottom: 400px;
      animation: falling 50s infinite linear;
      img {
        width: 15px;
        height: 15px;
      }
    }
    .heart-falling:nth-of-type(3) {
      left: 30%;
      bottom: 1000px;
      animation: falling 45s infinite linear;
      img {
        width: 35px;
        height: 35px;
      }
    }
    .heart-falling:nth-of-type(4) {
      left: 50%;
      bottom: 700px;
      animation: falling 30s infinite linear;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .heart-falling:nth-of-type(5) {
      left: 80%;
      bottom: 1200px;
    }
    .heart-falling:nth-of-type(6) {
      left: 90%;
      bottom: 900px;
      transition-delay: 1.5s;
      animation: falling 45s infinite linear;
      img {
        width: 25px;
        height: 25px;
      }
    }
    // -----------
    .heart-falling:nth-of-type(7) {
      left: 20%;
      bottom: 1600px;
      transition-delay: 1.5s;
      animation: falling 75s infinite linear;
    }
    .heart-falling:nth-of-type(8) {
      left: 40%;
      bottom: 1900px;
      animation: falling 81s infinite linear;
    }
    .heart-falling:nth-of-type(9) {
      left: 70%;
      bottom: 1400px;
      animation: falling 79s infinite linear;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .heart-falling:nth-of-type(10) {
      left: 30%;
      bottom: 2000px;
      animation: falling 81s infinite linear;
    }
    .heart-falling:nth-of-type(11) {
      left: 60%;
      bottom: 2500px;
      animation: falling 85s infinite linear;
    }
    .heart-falling:nth-of-type(12) {
      left: 90%;
      bottom: 2900px;
      animation: falling 80s infinite linear;
    }
    .heart-falling:nth-of-type(13) {
      left: 20%;
      bottom: 4800px;
      animation: falling 90s infinite linear;
    }
    .heart-falling:nth-of-type(14) {
      left: 80%;
      bottom: 4900px;
      animation: falling 91s infinite linear;
    }
    
    @keyframes falling {
      0% {
        transform: rotate(360deg);
      }
      50% {
        transform: rotate(360deg);
      }
      100% {
        bottom: -6000px;
        transform: rotate(360deg);
      }
    }
`;