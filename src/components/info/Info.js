import React from "react";
import "styled-components";
import styled from "styled-components";
import Layouts from "./../../assets/layouts.svg";
import Tree from "./../../assets/Tree.svg";
import One from "./../../assets/1.png";
import Two from "./../../assets/2.png";
import Three from "./../../assets/3.png";

const MainWrapper = styled.section`
  background: #e1f0f8;
`;

const H3 = styled.h3`
  font-size: 26px;
  font-weight: 400;
`;

const White = styled.div`
  background: white;
  border-radius: 5px;
`;

const Paragraph = styled.p`
  margin-left: 30px;
  margin-bottom: 0px;
  font-size: 14px;
`;

const ParagraphBottom = styled.p`
  margin-left: 20px;
  margin-bottom: 0;
  font-size: 14px;
`;

export default function Info() {
  return (
    <MainWrapper>
      <div className="container pt-4">
        <div className="row">
          <div className="col-3" />
          <White className="col-9 p-4 pb-4">
            <div>
              <H3>Зачем использовать ламинацию</H3>
            </div>
            <div className="d-flex mb-4">
              <div className="mt-2">
                <img src={Layouts} alt="layouts" />
              </div>

              <Paragraph>
                Чтобы придать внешнему виду окна оригинальную выразительность,
                специалисты применяют ламинацию – приём, при помощи которого
                можно декорировать своё жилье с учетом самых современных веяний
                дизайнерского искусства.
              </Paragraph>
            </div>
            <div className="d-flex mb-4">
              <div className="mt-2">
                <img src={Tree} alt="Tree" />
              </div>

              <Paragraph>
                При помощи ламинации оконного профиля можно, например, со всей
                точностью воспроизвести оттенки и структуру древесины: при этом
                обеспечивается полная визуализация натурального дерева, точно
                имитирующая расположение волокон. Помимо имитации деревянных
                поверхностей, применяют пленку самых разных цветов и фактур.
              </Paragraph>
            </div>
            <div>
              <H3>Как окна становятся цветными?</H3>
            </div>
            <div className="d-flex mb-2">
              <img
                src={One}
                alt="One"
                width="30px"
                height="30px"
                className="mt-1"
              />
              <ParagraphBottom>
                Собственно, процесс ламинации профиля ПВХ состоит в процедуре
                нанесения на его поверхность декоративных высокопрочных плёнок с
                применением специального клея и ламинирующих установок.
              </ParagraphBottom>
            </div>
            <div className="d-flex mb-2">
              <img
                src={Two}
                alt="Two"
                width="30px"
                height="30px"
                className="mt-3"
              />
              <ParagraphBottom>
                Плёнку прочно соединяют с профилем. При этом внешней стороне
                пленки свойственна высокая стойкость к повреждениям. В
                частности, цветное пластиковое окно, прошедшее процесс
                ламинации, стойко переносит температурные колебания в диапазоне
                от -80°С до +130°С, оно исключительно стойко к солнечному
                излучению.
              </ParagraphBottom>
            </div>
            <div className="d-flex">
              <img
                src={Three}
                alt="Three"
                width="30px"
                height="30px"
                className="mt-2"
              />
              <ParagraphBottom>
                Пластиковые окна, прошедшие процесс ламинации профилей, имеют
                срок службы гораздо больший, чем не ламинированные окна. В
                сравнении с окнами из массива дерева, они значительно дешевле.
              </ParagraphBottom>
            </div>
          </White>
        </div>
      </div>
    </MainWrapper>
  );
}
