import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #F2EDED;
  padding: 60px 0;
  @media only screen and (max-width: 425px) {
    padding: 25px 0;
  }
`;

export const Text = styled.div`
  text-align: center;
  font-size: 24px;
  color: #7b6666;
  // @media only screen and (max-width: 992px) {
  //   font-size: 20px;
  // }
`;

export const ThanksText = styled.div`
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  @media only screen and (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

export const QrWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  gap: 20px;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    border: 3px solid #cdc2c2;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: 60%;
  }
  @media only screen and (max-width: 425px) {
    grid-template-columns: 75%;
  }
`;

export const MapWrapper = styled.div`
  background-color: #f9f9f9;
  text-align: center;
  padding: 30px;
  &.wife {
    // background-color: #fbf7f8;
    // border-top: 1px solid #FF
  }
  iframe {
    width: 50%;
    height: 400px;
    min-width: 500px;
    margin-top: 20px;
    @media only screen and (max-width: 768px) {
      min-width: 400px;
    }
    @media only screen and (max-width: 425px) {
      min-width: 320px;
    }
  }
  @media only screen and (max-width: 425px) {
    padding: 10px 0;
  }
`;