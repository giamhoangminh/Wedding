import React from "react";
import {
  Background,
  BannerText,
  CountdownText,
  CountdownWrapper,
  Date,
  Text,
  Thanks,
  Title,
  Value,
  ValueWrapper,
  Table,
  Tbody,
  Tr,
  Th,
  Td,
  Calendar,
  CalendarWrap,
  CaptionTable,
  Current,
  ImageBg
} from "./styles";
import { DoiChe } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";
import Countdown from "react-countdown";

export function WeddingDay() {
  return (
    <SectionWrapper className="position-relative">
      <Background>
        <ImageBg bg={DoiChe}></ImageBg>
      </Background>
      <BannerText className="container">
        <Title>LỄ THÀNH HÔN</Title>
        <Date>07.01.2024</Date>
        <Thanks>
          Thật vui mừng khi kỷ niệm ngày đặc biệt này với gia đình và bạn
          bè. Hãy nhớ tham dự cùng chúng mình nhé!
        </Thanks>
        <Calendar>
        <CalendarWrap>
          <CaptionTable class="calendar-month">Tháng 1 / 2024</CaptionTable>
          <Table>
            <Tbody>
              <Tr>
                <Th abbr="Sunday">Sun</Th>
                <Th abbr="Monday">Mon</Th>
                <Th abbr="Tuesday">Tue</Th>
                <Th abbr="Wednesday">Wed</Th>
                <Th abbr="Thursday">Thu</Th>
                <Th abbr="Friday">Fri</Th>
                <Th abbr="Saturday">Sat</Th>
              </Tr>
              <Tr>
                <Td>&nbsp;</Td>
                <Td>1</Td>
                <Td>2</Td>
                <Td>3</Td>
                <Td>4</Td>
                <Td>5</Td>
                <Td>6</Td>
              </Tr>
              <Tr>
                <Td><Current id="today">7</Current></Td>
                <Td>8</Td>
                <Td>9</Td>
                <Td>10</Td>
                <Td>11</Td>
                <Td>12</Td>
                <Td>13</Td>
              </Tr>
              <Tr>
                <Td>14</Td>
                <Td>15</Td>
                <Td>16</Td>
                <Td>17</Td>
                <Td>18</Td>
                <Td>19</Td>
                <Td>20</Td>
              </Tr>
              <Tr>
                <Td>21</Td>
                <Td>22</Td>
                <Td>23</Td>
                <Td>24</Td>
                <Td>25</Td>
                <Td>26</Td>
                <Td>27</Td>
              </Tr>
              <Tr>
                <Td>28</Td>
                <Td>29</Td>
                <Td>30</Td>
                <Td>&nbsp;</Td>
                <Td>&nbsp;</Td>
                <Td>&nbsp;</Td>
                <Td>&nbsp;</Td>
              </Tr>
            </Tbody>
          </Table>
          <CountdownWrapper>
          <Countdown
            date={"2024-01-07T13:30:00"}
            intervalDelay={0}
            precision={3}
            renderer={(props) => (
              <CountdownText>
                {props.days > 0 && (
                  <ValueWrapper>
                    <Value>{props.days}</Value>
                    <Text>NGÀY</Text>
                  </ValueWrapper>
                )}
                <ValueWrapper>
                  <Value>{props.hours}</Value>
                  <Text>GIỜ</Text>
                </ValueWrapper>
                <ValueWrapper>
                  <Value>{props.minutes}</Value>
                  <Text>PHÚT</Text>
                </ValueWrapper>
                <ValueWrapper>
                  <Value>{props.seconds}</Value>
                  <Text>GIÂY</Text>
                </ValueWrapper>
              </CountdownText>
            )}
          />
        </CountdownWrapper>
        </CalendarWrap>
      </Calendar>
      </BannerText>
    </SectionWrapper>
  );
}
