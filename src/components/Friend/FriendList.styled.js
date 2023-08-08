import styled from 'styled-components';

export const FriendDiv = styled.div`
  width: 450px;
  /* min-height: 650px; */
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 8px 0px tomato;
  padding-top: 30px;  
  margin: 20px auto;
`;

export const FriendUl = styled.ul`
  margin: auto;
  width: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* height: 100px; */
  border-radius: 8px;
  border-top: 2px solid #909090;
  background-color: #f3f3f3;
`;

export const FriendLi = styled.li`
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
    border: 2px solid #909090;
    background-color: #f4edada8;
    align-items: center;
`;

export const Status = styled.span`
  font-size: 18px;
  font-weight: 600;
  width: 50px;
  height: 50px;
  background: tomato;
`;

export const AvatarImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 20px ;
  border-radius: 50%;  
`;

export const Name = styled.p`
  /* margin-bottom: 15px; */
  font-size: 20px;
  font-weight: 600;
  width: 80px;
  height: 40px;
  margin-block-start: 0;
  margin-block-end: 0;

`;