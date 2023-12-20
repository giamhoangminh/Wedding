import styled from "styled-components";
export const Background = styled.div`
  background-image: url(${({ bg }) => bg});
  padding: 40px 5%;
`;

export const Heading = styled.h3`
  text-align: center;
  font-size: 46px;
  margin-bottom: 40px;
`;

export const Title = styled.div`
text-align: center;
`;
export const WrapMain = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  grid-template-columns: auto auto;
  font-family: 'Comfortaa', cursive;
  @media only screen and (max-width: 1024px) {
    width: 90%
  }
  @media only screen and (max-width: 768px) {
    width: 100%
  }
  @media only screen and (max-width: 576px) {
    width: 90%;
    display: block;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    display: block;
  }
`;
export const FormInput = styled.div`
  width: 48%;
  background: #fff;
  border: 10px double #c89d9c;
  padding: 65px 45px 10px 45px;

  input, textarea {
    outline: 0;
    display: block;
    width: 100%;
    padding: 10px;
    border-color: #ddd;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: #fbfbfb;
    font-size: 14px;
  }
  textarea {
    margin-top: 30px;
  }
  button {
    background-color: #c89d9c;
    color: #fff;
    padding: 13px 30px 13px 25px;
    font-weight: 600;
    border: 0;
    border-radius: 3px;
    transition: all 0.3s;
    margin-top: 30px;
    &:hover {
      background-color: #ab6c6b;
    }
  }
  .text-center {
    text-align: center;
  }
  span {
    font-size: 12px;
    color: red;
  }
  @media only screen and (max-width: 1200px) {
    padding: 57px 28px 10px 28px;
  }
  @media only screen and (max-width: 768px) {
    padding: 57px 20px 10px 20px;
    width: 49%;
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 425px) {
    padding: 30px 12px 10px 12px;
  }
`;
export const FormOut = styled.div`
  width: 48%;
  font-size: 14px;
  background: #fff;
  border: 6px dotted #c89d9c;
  overflow: auto;
  height: 418px;
  .list {
    padding: 0;
    list-style: none;
    .item {
      padding: 10px;
      &:nth-child(even) {
        background: #c89d9c33;
      }
      &__name {
        font-weight: 600;
        margin-bottom: 5px;
        font-size: 16px;
        word-break: break-word;
      }
      &__content {
        margin: 0;
        word-break: break-word;
      }
    }
  }
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    margin-top: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  
  }
  
  ::-webkit-scrollbar-thumb {
    background: #DBDEE1; 
    border-radius: 8px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
    @media only screen and (max-width: 576px) {
    width: 100%;
  }
`;