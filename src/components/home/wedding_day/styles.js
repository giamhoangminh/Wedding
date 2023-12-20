import styled from "styled-components";
import { colors } from "../../../_principles/colors";
export const Background = styled.div`
  width: 100%;
  height: 720px;
  
  @media only screen and (max-width: 992px) {
    height: 650px;
  }

  @media only screen and (max-width: 425px) {
    height: 618px;
  }
`;

export const ImageBg = styled.div`
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  &::before {
    content: '';
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-color: #1f191a9c;
  }
  @media only screen and (max-width: 425px) {
    height: 260px;
    &::before {
      height: 260px;
    }
    /* background-size: contain;
    background-position: top center; */
  }
`

export const BannerText = styled.div`
  position: absolute;
  top: 45px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #c89d9c;
  font-weight: bold;
  z-index: 6;
  @media only screen and (max-width: 425px) {
    top: 26px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 44px;
  @media only screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const Date = styled.h2`
  text-align: center;
  font-size: 35px;
  margin-bottom: 14px;
  @media only screen and (max-width: 425px) {
    font-size: 25px;
  }
`;

export const Thanks = styled.p`
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
  // color: ${colors.white};
  @media only screen and (max-width: 425px) {
    font-size: 18px;
  }
`;

export const CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

export const SubText = styled.div`
  font-size: 28px;
`;

export const CountdownText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 30px;
  @media only screen and (max-width: 992px) {
    flex-wrap: wrap;
    gap: 10px;
  }
  @media only screen and (max-width: 425px) {
    gap: 8px;
  }
`;

export const ValueWrapper = styled.div`
  text-align: center;
  background: #c89d9c12;
  padding: 0 10px;
  border-radius: 4px;
  width: 70px;
  @media only screen and (max-width: 425px) {
    width: 58px;
  }
`;

export const Value = styled.div`
  font-size: 35px;
  @media only screen and (max-width: 992px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 425px) {
    font-size: 20px;
  }
`;

export const Text = styled.div`
  font-size: 15px;
  @media only screen and (max-width: 425px) {
    font-size: 12px;
  }
`;
export const Calendar = styled.div`
  padding: 60px;
  box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.15);
  width: max-content;
  background: #fff;
  margin: auto;
  @media only screen and (max-width: 992px) {
    padding: 0;
  }
`
export const CalendarWrap = styled.div`
  border: 5px solid rgb(129 103 103 / 40%);
  padding: 20px;
  @media only screen and (max-width: 425px) {
    padding: 10px;
  }
  @media only screen and (max-width: 375px) {
    padding: 5px;
  }
`
export const Table = styled.table`
width: 100%;
`

export const Tbody = styled.tbody``
export const Th = styled.th`
  text-align: center;
  padding: 8px;
  color: #484747;
  border-top: 1px solid #CFCFD0;
  border-bottom: 1px solid #CFCFD0;
  font-size: 18px;
  @media only screen and (max-width: 375px) {
    font-size: 15px;
    padding: 5px 0;
  }
` 
export const Tr = styled.tr``

export const Td = styled.td`
font-size: 0.9em;
text-align: center;
width: 40px;
height: 40px;
vertical-align: middle;
color: #484747;
`

export const CaptionTable = styled.div`
  text-align: center
`


export const Current = styled.div`
  display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 20px;
    padding: 5px;
    background-color: rgb(200, 157, 156);
    color: #fff;
    border-radius: 50%;
`