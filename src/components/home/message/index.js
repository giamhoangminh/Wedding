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
    axios.post('https://sheet.best/api/sheets/60d6a786-4344-4ebd-b17e-8a1452129713', data)
    .then(response => {
      if (response) {
        setName('');
        setText('');
        getMessage();
        // setList([data,...list])
      }
    })
  }

  const getMessage = (event) => {
    axios.get('https://sheet.best/api/sheets/60d6a786-4344-4ebd-b17e-8a1452129713')
    .then(response => {
      if (response.data) {
        const list = response.data.reverse()
        setList(list)
      }
    })
    // const list = [
    //   {
    //     name: 'A Hoà SGUET',
    //     text: 'Không đến chung vui cùng em được, chúc mừng hạnh phúc hai em nha <3'
    //   },
    //   {
    //     name: 'A Đông S5 SGUET',
    //     text: 'Mừng hạnh phúc em nha ^^'
    //   },
    //   {
    //     name: 'Tích Phúc - SGUET',
    //     text: 'Chúc mừng vợ chồng bạn Yến trăm năm hạnh phúc ♥️♥️♥️'
    //   },
    //   {
    //     name: 'Hằng cute phô mai que',
    //     text: '"Chúc bạn iu và anh Sơn hạnh phúc trăm năm, sớm có quý tử nè <3 Mãi là hàng xóm bạn nhớ 🤭"'
    //   },
    //   {
    //     name: 'Chị Thảo ',
    //     text: 'Chúc hai em trăm năm hạnh phúc .sớm sinh quý tử nhé.yêu e gái chị'
    //   },
    //   {
    //     name: 'Chị Hacutevl - LCC',
    //     text: 'Chúc mừng em Yến của tui trăm năm hạnh phúc ❤️ Chúc mừng Sơn đã hốt được em tui nha. Nâng niu em Yến đấy nhá… không là coi chừng LCC đó 🤣💪🏻 Zui zẻ…. Zui zẻ 🥳'
    //   },
    //   {
    //     name: 'C Ngân - LCC',
    //     text: 'Chúc hai em của chuỵ trăm năm hạnh phúc, sớm thành Phú ông Phú bà tại TB nhé 💕💕💕'
    //   },
    //   {
    //     name: 'Chị Sói thông minh xinh đẹp đáng yêu siêu cấp vô địch vạn người mê from LCC with love',
    //     text: 'Cuối cùng thì em Yến của chị cũng tìm được hoàng tử cho riêng mình rùi. Chúc em trăm năm hạnh phúc, một đời an yên. Chúc anh Sơn luôn được em Yến em sủng.  Làm phật lòng em Yến thì anh biết tay bọn em nhaaa'
    //   },
    //   {
    //     name: 'chị Nga 10 điểm from LCC',
    //     text: 'chúc mừng em Yến của chị, chúc em mãi hạnh phúc, cười thật nhiềuuuuu 😘... Sơn mà bắt nạt em của em là hội đồng em không tha cho anh đâu đấy 👀👊'
    //   },
    //   {
    //     name: 'Chị Trang cute nấu ăn ngon - From Lục công chúa with love',
    //     text: '"Chúc hai em của chị 5-10-15-20-…- ennờ năm nữa vẫn luôn yêu thương nhau như ngày đầu mới yêu ❤️ Luôn nắm tay nhau vượt qua mọi khó khăn thử thách trên đời. Lục công chúa mãi iu hai em ❤️"'
    //   },
    //   {
    //     name: 'A Cự',
    //     text: '"Chúc 2 đứa trăm năm hạnh phúc  /n Luôn luôn được hạnh phúc vẹn tròn nhé!"'
    //   },
    //   {
    //     name: 'HuongMT - dev đỉnh',
    //     text: 'Chúc anh chị năm trăm năm hạnh phúc nhé @@'
    //   },
    //   {
    //     name: 'DuyênNT',
    //     text: 'Đáng iu quá đỗi <3 <3  Chúc 2 em đám cưới thật hạnh phúc, cuộc sống viên mãn.'
    //   },
    //   {
    //     name: 'E Lộc',
    //     text: 'Chúc anh Sơn và bạn Yến trăm năm hạnh phúc <3'
    //   },
    //   {
    //     name: 'Hưng Bunbu',
    //     text: '<script>alert(""Chúc anh Sơn và bạn Yến trăm năm hạnh phúc. <3"");</script>'
    //   },
    //   {
    //     name: 'test',
    //     text: 'cô dâu xinh đẹp tuyệt zời <3'
    //   },
    //   {
    //     name: 'NamT',
    //     text: '"Chúc anh Sơn và bạn Yến trăm năm hạnh phúc. Tiện thể cho em xin cái source code nhớ a <3 "'
    //   },
    //   {
    //     name: 'hanql',
    //     text: 'lời chúc này thay cho $$ em nhé :v'
    //   },
    //   {
    //     name: 'HR Bunbu',
    //     text: 'Chúc 2 bạn trăm năm hạnh phúc nha. Happy Weddingggg  '
    //   },
    //   {
    //     name: 'Hạt Gạo',
    //     text: 'Yêu chú rể'
    //   },
    //   {
    //     name: 'Nam Tit',
    //     text: 'Chúc anh trăm năm hạnh phúc'
    //   },
    //   {
    //     name: 'Chị kế toán Bunbu',
    //     text: 'Chúc mừng hạnh phúc 2 em nha!!!'
    //   },
    //   {
    //     name: 'Sơn Minh',
    //     text: 'Chúc anh trăm năm hạnh phúc'
    //   },
    //   {
    //     name: 'Cô dâu',
    //     text: 'Vâng ❤️'
    //   },
    //   {
    //     name: 'Chú rể',
    //     text: 'Chúc bé luôn hạnh phúc bên anh'
    //   }
    // ]
    // setList(list)
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
