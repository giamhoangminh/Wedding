import styled from "styled-components";
import { colors } from "../../../_principles/colors";

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  min-height: 750px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-position: top;
  color: ${colors.white};
  @media only screen and (max-width: 1200px) {
    min-height: 680px;
  }
  @media only screen and (max-width: 820px) {
    min-height: auto;
    height: 689px;
  }
  @media only screen and (max-width: 768px) {
    height: 615px;
  }
  @media only screen and (max-width: 425px) {
    height: 580px;
  }
`;
export const WrapBanner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 6;
    padding: 3%;
`;

export const BannerText = styled.div`
  border: 1px solid #fff;
  border-radius: 5px;
  height: 100%;
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .img-cirle {
    border-radius: 50%;
    width: 280px;
    height: 280px;
    margin-top: 40px;
    -webkit-box-shadow: 0px 4px 13.65px 7.35px rgba(178, 201, 211, 0.16);
    box-shadow: 0px 4px 13.65px 7.35px rgba(178, 201, 211, 0.16);
    object-fit: cover;
  }

  @-webkit-keyframes xoayvong {
    from {
      -webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
    }
    to {
      -webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
    }
  }
  /* Standard syntax */ 
  @keyframes xoayvong {
    from {
      -webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
    }
    to {
      -webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
    }
  }
  
  // call animation
  .img-cirle {
    animation: xoayvong 12s linear 0s infinite;
    -webkit-animation: xoayvong 12s linear 0s infinite;
    -moz-animation: xoayvong 12s linear 0s infinite;
    -o-animation: xoayvong 12s linear 0s infinite;
    &.pause {
      animation: auto;
    }
  }
  .content {
    margin-top: 20px;
    font-weight: bold;
    &__date {}
    &__name {
      font-size: 35px;
    }
    &__line {
      width: 500px;
      height: 3px;
      margin: auto;
      background: #ddd;
      margin-top: 20px;
      position: relative;
      &::before {
        content: attr(timeRun);;
        position: absolute;
        top: 10px;
        left: 0;
        font-size: 13px;
      }
      &::after {
        content: attr(timeEnd);
        position: absolute;
        right: 0;
        top: 10px;
        font-size: 13px;
      }
      .line-active {
        position: relative;
        height: 4px;
        background: #fff;
      }
      .line-active::after {
        content: "";
        position: absolute;
        background: #fff;
        padding: 7px;
        border-radius: 50%;
        right: -4px;
        top: -6px;
      }
    }
    &__play {
      width: 500px;
      align-items: center;
      justify-content: space-between;
      display: flex;
      margin: auto;
      margin-top: 40px;
      margin-bottom: 30px;
    }
    .wrap-audio {
      position: absolute;
      top: 0;
      audio {
        width: 0;
        opacity: 0;
      }
    } 
  }
  @media only screen and (max-width: 1281px) {
    .img-cirle {
      width: 250px;
      height: 250px;
    }
  }
  @media only screen and (max-width: 768px) {
    .img-cirle {
      width: 200px;
      height: 200px;
      margin-top: 40px;
    }
    .content__name {
      font-size: 30px;
    }
    .content__line, .content__play {
      width: 90%;
    }
  }
  @media only screen and (max-width: 425px) {
    .img-cirle {
      margin-top: 30px;
    }
    .content__play {
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
`;

export const TopText = styled.div`
  text-align: center;
  .form {
    font-size: 20px;
    margin-top: 10px;
  }
`
export const OverlayBanner = styled.div`
  content: '';
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: #7a70729c;
  // #aaa8a538
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  margin-right: 50px;
  font-size: 46px;
`;

export const Description = styled.div`
  display: flex;
`;

export const Address = styled.div`
  padding-right: 20px;
  font-size: 22px;
`;

export const Name = styled.div`
  position: relative;
  text-align: center;
  padding: 0 20px;
  font-size: 45px;
  &::before {
    content: "";
    display: block;
    width: 2px;
    height: 150px;
    background-color: ${colors.white};
    position: absolute;
    top: 0;
    left: -1px;
  }
  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 150px;
    background-color: ${colors.white};
    position: absolute;
    top: 0;
    right: -1px;
  }
`;

export const Date = styled.div`
  padding-left: 20px;
  font-size: 20px;
  margin-top: 35px;
  ${Name} {

  }
  @media (max-width: 768px) {

  } 
`;

export const TextLeft = styled.div`
  color: ${colors.white};
`

export const Image = styled.img`
  width: 100%;
`;