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
import { GiLovers, GiBus, GiForkKnifeSpoon } from "react-icons/gi";
import { AiFillHeart } from "react-icons/ai";
import { BannerTimelineWife } from "../../../assets/images";

export function ScheduleWife() {
  return (
    <SectionWrapper>
      <Wrapper bg={BannerTimelineWife} className="container">
        <Title>Chương trình tiệc cưới</Title>
        <Invitation>Nhà Gái</Invitation>
        <SubTitle>
          Tới dự bữa cơm thân mật mừng hôn lễ của chúng mình vào 07/01/2024 tại Xóm 6, Tây Phú, Thượng Hiền, Kiến Xương, Thái Bình <AiFillHeart/>
        </SubTitle>
        <ScheduleWrapper>
          {/* <EventWrapper>
            <EventLeft>
              <EventTime>09:00</EventTime>
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
              <GiLovers />
            </IconWrapper>
            <EventRight>
              <EventTime>09:30</EventTime>
              <EventText>Ăn tiệc</EventText>
            </EventRight>
          </EventWrapper> */}
          <EventWrapper>
            <EventLeft>
              <EventTime>9:00</EventTime>
              <EventText>Ăn tiệc</EventText>
            </EventLeft>
            <IconWrapper>
              <GiForkKnifeSpoon />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
          <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiLovers />
            </IconWrapper>
            <EventRight>
              <EventTime>11:30</EventTime>
              <EventText>Lễ Vu quy</EventText>
            </EventRight>
          </EventWrapper>
          <EventWrapper>
            <EventLeft>
              <EventTime>13:00</EventTime>
              <EventText>Đưa cô dâu về nhà chồng</EventText>
            </EventLeft>
            <IconWrapper>
              <GiBus />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
        </ScheduleWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
