/* eslint-disable no-restricted-globals */
import React from "react";

import { SectionWrapper } from "../../../_principles/styles";
import {
  Background, Title, Heading, WrapMain, FormInput, FormOut
} from "./styles";
import { BgLayout, ImgFlower } from '../../../assets/images/index'

import { AiOutlineSend  } from "react-icons/ai";

import axios from 'axios';

export function Message() {
  const [name, setName] = React.useState('');
  const [text, setText] = React.useState('');
  const [list, setList] = React.useState([]);
  const [isSubmit, setIsSubmit] = React.useState(false);

  const onInputName = (event) => {
    setName(event.target.value || '')
  };

  const onInputText = (event) => {
    setText(event.target.value || '')
  };

  const onSubmitMessage = (event) => {
    if (!name || !text) {
      setIsSubmit(true);
      return
    }
    setIsSubmit(false);
    const data = {
      name: name,
      text: text,
    }
    axios.post('https://sheet.best/api/sheets/d744d284-3d19-413d-9e88-ad274b25d761', data)
    .then(response => {
      if (response) {
        setName('');
        setText('');
        getMessage();
        setList([data,...list])
      }
    })
  }

  const getMessage = (event) => {
    axios.get('https://sheet.best/api/sheets/d744d284-3d19-413d-9e88-ad274b25d761')
    .then(response => {
      if (response.data) {
        const list = response.data.reverse()
        setList(list)
      }
    })
    
  }

  React.useEffect(() => {
    getMessage()
  }, []);

  return (
    <SectionWrapper id="message">
      <Background  bg={BgLayout}>
        <Heading>
          <img src={ImgFlower} alt=''></img>
          <Title>Gửi lời chúc</Title>
        </Heading>
        <WrapMain>
          <FormInput>
            <input type="text" value={name} placeholder="Nhập họ tên *" onInput={() => onInputName(event)}></input>
            { isSubmit && !name && (
              <span>Vui lòng nhập tên của bạn</span>
            )}
            <textarea value={text} rows="4" cols="50" placeholder="Nhập lời chúc của bạn *" onInput={() => onInputText(event)}></textarea>
            { isSubmit && !text && (
              <span>Vui lòng nhập lời chúc của bạn</span>
            )}
            <div className="text-center">
              <button onClick={() => onSubmitMessage()}>Gửi lời chúc <AiOutlineSend/></button>
            </div>
          </FormInput>
          <FormOut>
            <ul className="list">
              {list.map((item, i) => (
                <li className="item">
                  <div className="item__name"> {item.name} </div>
                  <p className="item__content"> {item.text}</p>
                </li>
              ))}
            </ul>
          </FormOut>
        </WrapMain>
      </Background>
    </SectionWrapper>
  );
}
