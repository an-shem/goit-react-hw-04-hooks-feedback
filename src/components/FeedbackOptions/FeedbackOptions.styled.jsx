import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  /* padding-left: 30px; */
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 120px;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid #c9c1c1;
  border-radius: 14px;
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.03em;
  text-align: center;
  color: #5c6061;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    background-color: #15e7ee29;
  }
`;
