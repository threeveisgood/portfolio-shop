import Link from "next/link";
import * as React from "react";
import {
  Nav,
  InformationUl,
  InformationLi,
  InformationA,
} from "./nav-bar.styled";
const navbarInformation = [
  {
    id: 0,
    name: "식품",
  },
  {
    id: 1,
    name: "PC제품",
  },
  {
    id: 2,
    name: "S/W",
  },
  {
    id: 3,
    name: "가전제품",
  },
  {
    id: 4,
    name: "화장품",
  },
  {
    id: 5,
    name: "패션",
  },
];

const NavBar: React.FunctionComponent = () => {
  return (
    <>
      <Nav>
        <InformationUl>
          {navbarInformation.map((info) => {
            return (
              <InformationLi key={info.id}>
                <Link
                  href={{
                    pathname: "category",
                    query: { value: info.name },
                  }}
                  passHref
                >
                  <InformationA>{info.name}</InformationA>
                </Link>
              </InformationLi>
            );
          })}
        </InformationUl>
      </Nav>
    </>
  );
};

export default NavBar;
