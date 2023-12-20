import styled from "styled-components";
import { colors } from "../../../_principles/colors";


export const Title = styled.h3`
  font-size: 40px;
  text-align: center;
  color: ${colors.white};
  transition: all 1.5s;
`;




export const SubTitle = styled.h4`
  font-size: 24px;
  text-align: center;
  margin-bottom: 60px;
  padding: 0 120px;
  @media only screen and (max-width: 425px) {
    padding: 0 30px;
    margin-bottom: 35px;
    text-align: left;
    font-size: 20px;
  }
`;



const WifeHusband = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
`;



export const Avatar = styled.div`
  z-index: 1;
  width: 50%;
  height: auto;
  padding: 10px;
  background: #fff;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const FeelingText = styled.div`
  width: 50%;
  padding: 25px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 15px;
  }
`;

export const Wife = styled(WifeHusband)`
  ${FeelingText} {
    transform: translateX(-97%);
    transition: transform 1.5s;
    transition-duration: 1.5s;
  }
  @media only screen and (max-width: 425px) {
    ${FeelingText} {
      transform: translateX(0);
    }
  }
`;

export const Husband = styled(WifeHusband)`
  flex-direction: row-reverse;
  ${FeelingText} {
    transform: translateX(97%);
    transition: transform 2.5s;
    transition-duration: 2.5s;
    transition-delay: 1.5s;
  }
  ${Name} {
    text-align: right;
  }
  @media only screen and (max-width: 425px) {
    ${FeelingText} {
      transform: translateX(0);
    }
    ${Name} {
      text-align: left;
    }
  }
`;

export const Feeling = styled.div`
  width: 55%;
  margin: auto;
  background: #f9f9f9;
  -webkit-box-shadow: 0px 4px 13.65px 7.35px rgba(178, 201, 211, 0.16);
  box-shadow: 0px 4px 13.65px 7.35px rgba(178, 201, 211, 0.16);

  @media only screen and (max-width: 992px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 85%;
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
    padding: 10px;
  }
  &.active {
    ${Title} {
      font-size: 40px;
    }
    ${FeelingText} {
      transform: translateX(0);
    }
  }
`;
export const Text = styled.p`
  font-family: "comfortaaregular", sans-serif;
  /* line-height: 28px; */
  font-size: 17px;
  font-weight: 400;
  color: #444444;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Heart = styled.div`
  color: ${colors.main};
  svg {
    width: 30px;
    height: 30px;
    animation: pp 0.6s ease alternate infinite;
  }
  @keyframes pp {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.6);
    }
  }
`;

export const Wrapper = styled.div`
  background-color: ${colors.white};
  padding: 60px 10px;
  @media only screen and (max-width: 425px) {
    padding: 40px 0;
  }
  &.active {
    ${Title} {
      color: ${colors.pink};
    }
  }
  @media (min-width: 576px) {
    &.container {
      max-width: initial;
    }
  }
`;
