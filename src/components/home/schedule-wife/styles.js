import styled from "styled-components";
import { colors } from "../../../_principles/colors";

export const Wrapper = styled.div`
  background-image: url(${({ bg }) => bg});
  padding: 80px 50px;
  width: 33.5%;
  margin: auto;
  margin-top: 57px;
  margin-bottom: 20px;
  // background: #b7a0a0;
  color: #7b6666;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 5px solid #fde1e947;
  // border-right: 7px solid #fde1e947;
  box-shadow: 0 0 10px 3px #d7cfcf;
  @media only screen and (max-width: 1440px) {
    width: 48.5%;
  }
  @media only screen and (max-width: 1280px) {
    width: 55.5%;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 100px;
    width: 70%;
  }
  @media only screen and (max-width: 820px) {
    width: 85%;
  }
  @media only screen and (max-width: 768px) {
    width: 70%;
    margin-top: 70px;
    padding: 40px 60px;
  }
  @media only screen and (max-width: 740px) {
    margin-top: 40px;
    width: 80%;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    padding: 38px 10px;
  }
  @media only screen and (max-width: 425px) {
    margin-top: 10px;
    width: 95%;
    padding: 30px 20px;
  }
`;

export const Title = styled.h3`
  font-size: 35px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h4`
  font-size: 22px;
  text-align: center;
  margin-bottom: 60px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 18px;
    margin-bottom: 18px;
    padding: 0 6px;
  }
`;

export const Invitation = styled.h4`
  text-align: center;
  font-size: 40px;
  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const IconWrapper = styled.div`
  border: 1px solid ${colors.pink};
  padding: 20px;
  border-radius: 50%;
  position: relative;

  @media only screen and (max-width: 320px) {
    padding: 5px;
  }

  &::after {
    content: "";
    display: block;
    background-color: ${colors.pink};
    width: 1px;
    height: 82px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, 0);
    @media only screen and (max-width: 425px) {
      top: 54px;
      height: 35px;
    }
  }
  svg {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 425px) {
    padding: 12px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 60px;
  // @media only screen and (max-width: 1800px) {
  //   margin-bottom: 30px;
  // }
  @media only screen and (max-width: 992px) {
    gap: 15px;
  }

  @media only screen and (max-width: 425px) {
    gap: 14px;
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 375px) {
    margin-bottom: 11px;
  }
`;

export const ScheduleWrapper = styled.div`
  @media only screen and (max-width: 992px) {
    padding: 0 8px;
  }
  ${EventWrapper}:last-child {
    margin-bottom: 0;
    ${IconWrapper}::after {
      display: none;
    }
  }
`;

export const EventLeft = styled.div`
  position: relative;
  width: 38%;
  padding: 15px;
  border: 1px solid ${colors.pink};

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 16px solid ${colors.pink};
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: -15px;
  }
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 16px solid ${colors.pink};
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: -16px;
  }
  @media only screen and (max-width: 425px) {
    padding: 4px 6px 4px 13px;
    &::after, &::before {
      
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-left: 10px solid ${colors.pink};
      right: -10px;
    }
  }

  @media only screen and (max-width: 320px) {
    &::after,
    &::before {
      display: none;
    }
  }
`;

export const EventRight = styled.div`
  position: relative;
  width: 38%;
  padding: 15px;
  border: 1px solid ${colors.pink};

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 16px solid ${colors.pink};
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: -15px;
  }
  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 16px solid ${colors.pink};
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: -16px;
  }

  @media only screen and (max-width: 425px) {
    padding: 4px 13px;
    &::after, &::before {
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid ${colors.pink};
      left: -10px;
    }
  }

  @media only screen and (max-width: 320px) {
    &::after,
    &::before {
      display: none;
    }
  }
`;

export const EventEmpty = styled.div`
  width: 38%;
`;

export const EventText = styled.div`
  font-size: 21px;
  font-weight: bold;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

export const EventTime = styled.div``;
