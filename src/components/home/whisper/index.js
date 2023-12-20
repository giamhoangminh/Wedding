import React from "react";
import { AvatarHusband, AvatarWife } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";
import {
  Avatar,
  Feeling,
  FeelingText,
  Husband,
  Image,
  Name,
  SubTitle,
  Text,
  Title,
  Wife,
  Wrapper,
} from "./styles";
export function Whisper() {
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    var feelings = document.querySelectorAll(".feeling");
    var windowHeight = window.innerHeight;
    var elementVisible = 150;
    // console.log('reveals: ', reveals);
    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        // console.log('elementTop: ', elementTop, ' windowHeight: ', windowHeight, 'windowHeight - elementVisible: ', windowHeight - elementVisible);
        reveals[i].classList.add("active");
      } else {
        // reveals[i].classList.remove("active");
      }
    }
    for (var j = 0; j < feelings.length; j++) {
      var elementTopj = feelings[j].getBoundingClientRect().top;
      if (elementTopj < windowHeight - elementVisible) {
        // console.log('elementTopj: ', elementTopj, ' windowHeightj: ', windowHeight, 'windowHeightj - elementVisiblej: ', windowHeight - elementVisible);
        feelings[j].classList.add("active");
      } else {
        // reveals[i].classList.remove("active");
      }
    }
    elementVisible = 1;
  };

  window.addEventListener("scroll", reveal);

  return (
    <SectionWrapper>
      <Wrapper className="container reveal">
        <Title>Chú rể & Cô dâu</Title>
        <SubTitle id="demo">
          {/* Tình cảm ấy, chẳng cần cứ phải hét to lên cho cả thế giới biết, chỉ cần thủ thỉ cho một người là cả thế giới của mình... */}
          Hạnh phúc trong tình yêu không phải điều gì to lớn, đôi khi hạnh phúc đơn giản chỉ là cùng nhau làm những điều nhỏ nhặt mỗi ngày.
        </SubTitle>
        <Feeling className="feeling">
          <Wife>
            <Avatar>
              <Image src={AvatarWife} alt="wife" />
            </Avatar>
            <FeelingText>
              <Name>Nguyễn Thị Xuân Nga</Name>
              <Text>
                "Cô dâu Xuân Nga - 1997, Tuổi con mèo cầm tinh con sư tử, yêu màu hồng ghét sự giả dối 😄.
Với mình "Hạnh phúc không phải làm ra cho ai xem. Hạnh phúc đơn giản chỉ là nắm tay người bạn đời của mình kiên quyết đi trên con đường mình đã chọn❤️"
              </Text>
            </FeelingText>
          </Wife>
          {/* <Heart>
            <AiFillHeart />
          </Heart> */}
          <Husband>
            <Avatar>
              <Image src={AvatarHusband} alt="husband" />
            </Avatar>
            <FeelingText>
              <Name>Hoàng Minh Giám</Name>
              <Text>
                "Chú rể Minh Giám - 1997, vừa kute, hiền lành lại chăm làm việc nhà, đặc biệt là thích rửa bát cho vợ.
Công việc chuyên môn: Đi khách và làm tiền.
Mong ước nhỏ nhoi của mình là có tầm chục tỷ gửi tiết kiệm, sống một cuộc sống bình lặng, hông bon chen với đời ^^"
              </Text>
            </FeelingText>
          </Husband>
        </Feeling>
      </Wrapper>
    </SectionWrapper>
  );
}
