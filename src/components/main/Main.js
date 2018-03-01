import React from "react";
import "styled-components";
import styled from "styled-components";
import Window from "../../assets/window.png";
import Color from "../../assets/color.png";

const MainWrapper = styled.section`
  background: #e1f0f8;
`;

const H1 = styled.h1`
  text-align: left;
  font-size: 64px;
  color: #4b4b4b;
`;

const H3 = styled.span`
  font-size: 26px;
  color: #4b4b4b;
  text-align: left;
`;

const Card = styled.div`
  background: #fff;
  margin-top: 33px;
  border-radius: 5px;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: underline;
  padding-bottom: 17px;
  margin-left: 23px;
  font-size: 16px;
  color: #a5a5a5;

  &:hover {
    color: #f6bdb0;
  }
`;

const White = styled.div`
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin-top: 33px;
  padding-top: 20px;
  padding-bottom: 18px;
  margin-left: -15px;
`;

const Also = styled.span`
  display: inline-block;
  font-size: 20px;
  padding-bottom: 17px;
  text-align: left;
  margin-left: 23px;
`;

const H2 = styled.h2`
  display: block;
  padding-top: 27px;
  padding-left: 22px;
  padding-bottom: 30px;
  font-size: 24px;
  color: #4b4b4b;
`;

const Article = styled.article`
  font-size: 18px;
  color: #c6c6c6;
`;

const Li = styled.li`
  font-size: 14px;
  color: #484848;
  &::before {
    content: "•";
    color: orange;
    margin-right: 10px;
  }
`;

const Ul = styled.ul`
  list-style: none;
`;

const SelectTitle = styled.div`
  font-size: 20px;
  color: #484848;s
`;

const Advanced = styled.div`
  display: block;
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #eb5825;
  color: white;
`;

const Feedback = styled.a`
  font-size: 14px;
  color: #c6c6c6;
  text-decoration: underline;
`;

export default function Main() {
  return (
    <MainWrapper>
      <div className="container">
        <div className="row">
          <H1>Цветные пластиковые окна</H1>
          <H3>
            Ламинируем профиль ПВХ для предания окнам цвета и фактуры дерева
          </H3>
        </div>
        <div className="row">
          <div className="col-3">
            <White>
              <Also>Рекомендуем также</Also>
              <Link href="">Edinburgh by REHAU</Link>
              <Link href="">Estet by REHAU</Link>
              <Link href="">REHAU DELIGHT-Design</Link>
              <Link href="">REHAU BRILLANT-Design</Link>
              <Link href="">REHAU Geneo</Link>
              <Link href="">Цветные окна</Link>
              <Link href="">Стеклопакеты</Link>
              <Link href="">
                Остекление балконов<br /> и лоджий
              </Link>
              <Link href="">
                Отделка<br /> и утепление балконов
              </Link>
              <Link href="">Балконные блоки</Link>
            </White>
          </div>
          <div className="col-9 pr-1 pl-1">
            <Card className="pb-5">
              <H2>Создайте выразительный интерьер с цветными окнами REHAU</H2>
              <div className="row text-center ml-2">
                <div className="col-4">
                  <img src={Window} alt="window" />
                  <Article className="mt-4">Ирландский дуб</Article>
                </div>
                <div className="col-8">
                  <Ul className="text-left">
                    <Li>Точная визуализация натурального дерева.</Li>
                    <Li>
                      Яркие нестандартные цвета в тон или в дополнение
                      интерьера.
                    </Li>
                    <Li>Разные фактуры для Ваших пластиковых окон.</Li>
                    <div className="mt-4">
                      <SelectTitle>Подберите цвет для своих окон:</SelectTitle>
                      <a href="">
                        <img src={Color} alt="color" className="mt-3" />
                      </a>
                      <Advanced className="mt-3">
                        Больше 50 вариантов цветов и фактур спрашивайте<br /> у
                        наших замерщиков
                      </Advanced>
                      <Button type="submit" className="btn mt-4 px-5">
                        Рассчитать со скидкой 70%
                      </Button>
                      <div>
                        <Feedback href="">
                          или отправить заявку и получить консультацию
                        </Feedback>
                      </div>
                    </div>
                  </Ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}
