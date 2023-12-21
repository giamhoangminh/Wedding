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
          Hạnh phúc trong tình yêu không phải điều gì to lớn, đôi khi hạnh phúc đơn giản chỉ là cùng nhau làm những điều nhỏ nhặt mỗi ngày.
        </SubTitle>
        <SubTitle id="demo">
          Gặp gỡ là chữ duyên, cùng nhau đi qua cuộc đời là định mệnh sắp đặt. Đó là món quà ý nghĩa mà cuộc sống dành tặng cho mỗi con người.
        </SubTitle>
        <Feeling className="feeling">
          <Wife>
            <Avatar>
              <Image src={AvatarWife} alt="wife" />
            </Avatar>
            <FeelingText>
              <Name>Nguyễn Thị Xuân Nga</Name>
              <Text>
                Cô dâu Xuân Nga - Một cô gái Song ngư với nhiều mộng mơ. Là cô gái hay cười nhưng lại thích sống nội tâm. Với em: "Một cuộc sống hôn nhân hạnh phúc là cả một cuộc hành trình
                , cả hai phải cùng nhau cố gắng, cùng nhau trưởng thành và học hỏi."
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
                Chú rể Minh Giám - Một chàng trai Bảo Bình luôn cởi mở lạc quan. Là một chàng trai hiền lành, luôn có các mối quan hệ tốt đẹp với mọi người xung quanh.
                Với anh: "Gia đình là điểm tựa vững chắc nhất và là bến đỗ không đâu sánh bằng đối với mỗi người. Đó luôn là nơi tràn ngập tình yêu thương để ta trở về."
              </Text>
            </FeelingText>
          </Husband>
        </Feeling>
      </Wrapper>
    </SectionWrapper>
  );
}
