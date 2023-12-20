import { SectionWrapper } from "../../../_principles/styles";
import {
  EventEmpty,
  EventLeft,
  EventRight,
  EventText,
  EventTime,
  EventWrapper,
  IconWrapper,
  Invitation,
  ScheduleWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";
import { FaGlassCheers } from "react-icons/fa";
import { GiBus, GiLovers, GiForkKnifeSpoon } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { BannerTimeline } from "../../../assets/images";

export function Schedule() {
  return (
    <SectionWrapper>
      <Wrapper bg={BannerTimeline} className="container">
        <Title>Chương trình tiệc cưới</Title>
        <Invitation>Nhà Trai</Invitation>
        <SubTitle>
          Tới dự bữa cơm thân mật mừng hôn lễ của chúng mình vào 07/01/2024 tại xóm 14, Sơn Thọ, Nam Bình, Kiến Xương, Thái Bình <AiFillHeart/>
        </SubTitle>
        <ScheduleWrapper>
          <EventWrapper>
            <EventLeft>
              <EventTime>08:30</EventTime>
              <EventText>Đón khách tiệc trà</EventText>
            </EventLeft>
            <IconWrapper>
              <FaGlassCheers />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
          <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiForkKnifeSpoon />
            </IconWrapper>
            <EventRight>
              <EventTime>09:00</EventTime>
              <EventText>Ăn tiệc</EventText>
            </EventRight>
          </EventWrapper>
          <EventWrapper>
            <EventLeft>
              <EventTime>11:00</EventTime>
              <EventText>Đi đón dâu</EventText>
            </EventLeft>
            <IconWrapper>
              <GiBus />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
          <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiLovers />
            </IconWrapper>
            <EventRight>
              <EventTime>13:30</EventTime>
              <EventText>Lễ thành hôn</EventText>
            </EventRight>
          </EventWrapper>
          {/* <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiMusicalNotes />
            </IconWrapper>
            <EventRight>
              <EventTime>12:30</EventTime>
              <EventText>Quẩy</EventText>
            </EventRight>
          </EventWrapper> */}
        </ScheduleWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
