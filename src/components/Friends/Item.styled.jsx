import styled from 'styled-components';

export const ItemStyled = styled.li`
  width: 200px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  display: block;
  border-radius: 50%;
`;
export const Avatar = styled.img``;
export const Name = styled.p`
  color: green;
`;

export const Online = styled.span`
  width: 15px;
  height: 15px;
  display: block;
  border-radius: 50%;
  background-color: green;
`;

export const Offline = styled.span`
  width: 15px;
  height: 15px;
  display: block;
  border-radius: 50%;
  background-color: red;
`;
