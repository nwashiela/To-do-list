import React from "react";
import styled from "styled-components";
import Link from "../Link/Link";

const Header = styled.header`
  background: #394387;
  color: white;
  text-align: center;
  font-family: Arial, san-serif;
  letter-spacing: 1px;
  padding: 0.1rem;
`;

// const Content = styled.main``;

const Tittle = styled.h1`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;
const List = styled.ul`
  list-style: none;
  font-family: Arial, sans-serif;
  display: Flex;
`;

// const Links = styled.a`
//   font-weight: bold;
//   display: block;
//   padding: 1rem;
//   cursor: pointer;
//   text-tranform: uppercase;
//   user-select: none;

//   &:hover {
//     background: rgba(0, 0, 0, 0.2);
//   }

//   &:active {
//     background: rgba(0, 0, 0, 0.4);
//   }
// `;

const LinkWrap = styled.li`
  width: 50%;
`;

const Footer = styled.footer`
  background: #dddd;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
`;

const PAGE_TITLE_MAP = {
  home: "To do List",
  add: "Add Items",
  adit: "Editing"
};


const Layout = (props) => {
  const { children, activePage } = props;
  return (
    <div>
      <Header>
        <Tittle>{PAGE_TITLE_MAP[activePage]}</Tittle>
      </Header>
      {children}

      <Footer>
        <nav>
          <List>
            <LinkWrap>
              <Link fullWidth disabled={activePage === "home"} url="#/" >
                Back to Home
              </Link>
            </LinkWrap>
    
            <LinkWrap>
              <Link fullWidth disabled={activePage === "add"} url="#/add" >
                Add new item
              </Link>
            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </div>
  );
};
export default Layout;