import styled from 'styled-components';
 
export const ProfileDiv = styled.div`
  width: 350px;
  min-height: 460px;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 1px 1px 8px 0px tomato;
  padding-top: 30px;  
  margin: 50px auto;

`;

export const AvatarImg = styled.img`
  width: 250px;
  height: 250px;
  margin-bottom: 30px;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 600;
`;

export const Tag = styled.p`
  margin-bottom: 15px;
  color: #808080;
`;

export const Location = styled.p`
  color: #808080;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const StatsUl = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
  border-radius: 8px;
  border-top: 2px solid #909090;
  background-color: #f3f3f3;
`;

export const StatsLi = styled.li`
  display: grid;
  height: 50px;
  width: 80px;
  border-radius: 8px;
  border: 2px solid #909090;
  background-color: #f4edada8;
`;

export const StatsSpanLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const StatsSpanQuantity = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

