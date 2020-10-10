import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  img {
    max-width: 100%;
    max-height: auto;
    min-width: 100px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }

  svg {
    max-width: 100%;
    min-width: 20px;
  }

  @media only screen and (max-width: 470px) {
    & {
      flex-direction: column;

      div {
        text-align: center;
        margin: 0px;
      }
    }
  }
`;
