import React from "react";
import logo from "../../assets/logo.png";
import "styled-components";
import styled from "styled-components";

const Head = styled.header`
  background: #e1f0f8;
`;

const White = styled.div`
  background: white;
`;

const Link = styled.a`
  color: #f36240;
  font-size: 23px;
  text-decoration: underline;
`;

const Top = styled.div`
  color: #484745;
  font-size: 16px;
`;

const Bottom = styled.div`
  color: #484745;
  font-size: 31px;
`;

const LinkBottom = styled.a`
  color: #5f6973;
  font-size: 24px;
`;

const Active = styled.div`
  background-color: #7bc3d5;
  color: white;
`;

export default function Header() {
  return (
    <Head>
      <White className="container">
        <div className="row align-items-end">
          <div className="col">
            <img src={logo} alt="logo" />
          </div>
          <div className="col">
            <Link href="">Рассчитать стоимость</Link>
          </div>
          <div className="col text-right">
            <Top>с 9 до 21 без выходных</Top>
            <Bottom>+7 495 534-65-33</Bottom>
          </div>
        </div>

        <div className="row justify-content-around ml-auto mt-3 text-center">
          <div className="col p-2">
            <LinkBottom>О компании</LinkBottom>
          </div>
          <Active className="col p-2 border-left border-right">
            <LinkBottom>Цены</LinkBottom>
          </Active>
          <div className="col p-2">
            <LinkBottom>Услуги и продукты</LinkBottom>
          </div>
          <div className="col p-2 border-left border-right">
            <LinkBottom>Акции</LinkBottom>
          </div>
          <div className="col p-2">
            <LinkBottom>Контакты</LinkBottom>
          </div>
        </div>
      </White>
    </Head>
  );
}
