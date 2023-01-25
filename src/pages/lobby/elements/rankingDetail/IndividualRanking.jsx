import React from "react";
import styled from "styled-components";

const IndividualRanking = () => {
  return (
    <StWrapper>
      <StBox>
        <StPlayerRanking>1</StPlayerRanking>
        <StPlayerRankingActive>◀ 999</StPlayerRankingActive>
      </StBox>
      <StBox2>
        <Sta></Sta>
        <Stb>정말긴이름을넣었을때라면</Stb>
        <Stc>999,999,999</Stc>
      </StBox2>
    </StWrapper>
    //
    // <StIndividualBox>
    //   <StIndvFirst>
    //     <StIndvFirstTop>
    //       <StPlayerRanking>1</StPlayerRanking>
    //     </StIndvFirstTop>
    //     <StIndvFirstBottom>
    //       <StPlayerRankingActive>332,341</StPlayerRankingActive>
    //     </StIndvFirstBottom>
    //   </StIndvFirst>
    //   <StIndvSec>
    //     <StPlayerProfile src="../../../../assets/img/profileIcon.png" />
    //   </StIndvSec>
    //   <StIndvThrd>
    //     <StIndvThrdTop>
    //       <StPlayerName>NamePlacement</StPlayerName>
    //     </StIndvThrdTop>
    //     <StIndvThrdBot>
    //       <StPlayerOverallScore>12,321,032</StPlayerOverallScore>
    //     </StIndvThrdBot>
    //   </StIndvThrd>
    //   <StIndvForth>
    //     <StPlayerTier>티어</StPlayerTier>
    //   </StIndvForth>
    // </StIndividualBox>
  );
};

const StWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
`;

const StBox = styled.div`
  width: 40px;
  height: 34px;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StBox2 = styled.div`
  width: 292px;
  height: 34px;

  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Sta = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid #111;
  background-image: url("https://cdn.pixabay.com/photo/2018/05/13/16/57/dog-3397110__480.jpg");
  background-size: cover;
`;

const Stb = styled.div`
  width: 150px;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #111;
  margin-left: 15px;
`;

const Stc = styled.div`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  margin-left: 20px;
`;

const StIndvFirst = styled.div`
  display: flex;
  flex-direction: column;
`;

const StIndvFirstTop = styled.div`
  display: flex;
  flex-direction: row;
  width: 72px;
  height: 36px;
`;
const StPlayerRanking = styled.span`
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #111;
`;

const StIndvFirstBottom = styled.div`
  display: Flex;
  flex-direction: row;
  width: 72px;
  height: 36px;
`;
const StPlayerRankingActive = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #ff601c;
`;
const StIndvSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 72px;
`;
const StPlayerProfile = styled.img``;

const StIndvThrd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 72px;
`;

const StIndvThrdTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 36px;
`;
const StPlayerName = styled.span`
  font-weight: bold;
`;
const StIndvThrdBot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 36px;
`;
const StPlayerOverallScore = styled.span``;

const StIndvForth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StPlayerTier = styled.span`
  display: inline-block;
  border: 1px solid black;
`;
export default IndividualRanking;
