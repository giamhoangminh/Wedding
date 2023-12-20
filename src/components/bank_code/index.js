import { SectionWrapper } from "../../_principles/styles";
import { Bank, Momo } from "../../assets/images";
import { QrWrapper, Text, ThanksText, Wrapper, MapWrapper } from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function BankCode() {
  return (
    <SectionWrapper>
      <MapWrapper id="map">
        <Text>Bản đồ tới địa điểm tổ chức lễ thành hôn <br></br> (Nhà Trai)</Text>
        <a
          className="nav-link"
          href="https://maps.app.goo.gl/3QyMMr6qfeVLLNST6"
          target="_blank"
          rel="noreferrer"
        >
          {/* <img alt={"imgMap"} effect="blur" src={Map} /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.2939388186755!2d106.44456157426937!3d20.32947221143084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ff2e7262072d%3A0x3cf5863621d94b0e!2zSG_DoG5nIE1pbmggR2nDoW0!5e0!3m2!1svi!2s!4v1703006341122!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  title="google map"></iframe>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4514.217901108181!2d105.78933488564986!3d21.038042637488857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3825b81c07%3A0x95ef3aeb3d5bf0f!2zVHLhu5FuZyDEkOG7k25nIFBhbGFjZQ!5e1!3m2!1svi!2sus!4v1696346671895!5m2!1svi!2sus"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  title="google map"></iframe> */}
        </a>
      </MapWrapper>
      <MapWrapper id="map" className="wife">
        <Text>Bản đồ tới địa điểm tổ chức lễ thành hôn <br></br> (Nhà Gái)</Text>
        <a
          className="nav-link"
          href="https://maps.app.goo.gl/PAK37UL8Gd1AUwJV6"
          target="_blank"
          rel="noreferrer"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714.4517618550994!2d106.4599951045765!3d20.413960281411914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135f98ad788a519%3A0xdb24517895cd800c!2zQ8ahIHPhu58gc-G6o24geHXhuqV0IG1heSB0cmUgxJFhbiBYdcOibiDEkOG6oWk!5e0!3m2!1svi!2s!4v1703006695328!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  title="google map"></iframe>
          {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </a>
      </MapWrapper>
      <Wrapper id="bank">
        <Text> Gửi quà mừng đến Chú Rể và Cô Dâu</Text>
        <ThanksText>Cảm ơn!!!</ThanksText>
        <QrWrapper>
          <LazyLoadImage alt={"imgBank"} effect="blur" src={Bank} />
          <LazyLoadImage alt={"imgMomo"} effect="blur" src={Momo} />
        </QrWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
