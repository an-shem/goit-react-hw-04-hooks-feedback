import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  padding-left: 30px;
`;

export const Button = styled.button`
  padding: 2px 10px;
  border: 1px solid #c9c1c1;
  border-radius: 8px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.03em;
  text-align: center;
  background-color: #fff;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    background-color: #66bdf0;
  }
`;
