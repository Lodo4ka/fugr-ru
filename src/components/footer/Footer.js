import React from "react";
import "styled-components";
import styled from "styled-components";
import Stars from "./../../assets/stars.svg";
import Download from "./../../assets/download.png";

const H2 = styled.h2`
  font-size: 25px;
  margin: 0;
`;

const Wrapper = styled.footer`
  background-color: #e1f0f8;
`;

const Link = styled.a`
  color: #eb5825;
  text-decoration: underline;
`;

const Read = styled.a`
  color: orange;
  text-decoration: underline dotted;
`;

const Button = styled.button`
  background-color: #eb5825;
  color: white;
  font-size: 16px;
`;

const Row = styled.div`
  border-radius: 5px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <div className="container pt-2">
        <div className="row">
          <div className="col-3" />
          <div className="col-9">
            <div className="d-flex justify-content-between align-items-end mb-2">
              <H2>Отзывы о цветных пластиковых окнах</H2>
              <Link href="">посмотреть еще отзывы</Link>
            </div>
            <Row className="row flex-column bg-white p-3 align-items-start">
              <h5>Алена</h5>
              <span className="text-secondary">Договор № 09.10.33512.13</span>
              <span className="text-secondary">
                Дата размещения: 13 декабря 2013 года
              </span>
              <img src={Stars} alt="raiting" className="mt-1" />
              <p className="mt-2">
                Поставили нам окна во всей квартире.Все очень
                понравилось)))компания на 5+.Все очень любезные,гибкая система
                скидок!!!буду советовать всем!!!Сервис был на высоте,во-первых с
                поставкой получилось быстрее,во-вторых два раза приезжал
                замерщик Алексей,ему большое спасибо...
              </p>
              <Read href="">
                <img src={Download} alt="download" className="mr-1" />прочитать
                полностью
              </Read>

              <Button type="submit" className="btn py-2 px-3 mt-4">
                оставить отзыв
              </Button>
            </Row>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
