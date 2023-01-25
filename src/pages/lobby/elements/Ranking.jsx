import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import IndividualRanking from "./rankingDetail/IndividualRanking";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import mockDataMy from "./roomListDetail/MockDataMy";
import { AnimatePresence, motion } from "framer-motion";
import { useCycle } from "framer-motion";

// const billBoardAction = {
//   hidden: {
//     x: -150,
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, ease: "easeInOut" },
//   },
//   exit: {
//     x: 150,
//     opacity: 0,
//   },
// };

const Ranking = () => {
  //   const [textIndex, cycleText] = useCycle(
  //     0,
  //     (currentIndex) => (currentIndex + 1) % text.length
  //   );
  //   const text = [
  //     "게임 순위는 1시간마다 업데이트됩니다.",
  //     "장시간의 게임은 건강에 해롭습니다",
  //   ];

  //   const handleInterval = () => {
  //     setTimeout(() => {
  //       cycleText();
  //     }, 4000);
  //   };

  //   useEffect(() => {
  //     handleInterval();
  //   }, [textIndex]);

  // const { data, status } = useQuery(["PERSONAL_RANKING"], () => mockDataMy);
  return (
    //   <StPersonalBox>
    //     {status === "loading" && <div>Loading...</div>}
    //     {status === "error" && <div>Error: {data.error.message}</div>}
    //     {status === "success" && mockDataMy && (
    //       <>
    //         <StMyRankBottom>
    //           <StMyRankTopLeft>
    //             <StRank>
    //               <StMyRanking>{mockDataMy.ranking}</StMyRanking>
    //             </StRank>
    //             <StRankChange>
    //               <StMyRankingActive>{mockDataMy.change}</StMyRankingActive>
    //             </StRankChange>
    //           </StMyRankTopLeft>

    //           <StMyRankBottomLeft>
    //             <StMyProfile src={mockDataMy.profileImageUrl}></StMyProfile>
    //             <StMyName>{mockDataMy.username}</StMyName>
    //           </StMyRankBottomLeft>

    //           <StMyRankBottomMid>
    //             <StMyOverallScore>{mockDataMy.score}</StMyOverallScore>
    //           </StMyRankBottomMid>
    //         </StMyRankBottom>
    //         <StUpdateNotice>
    //           <AnimatePresence>
    //             <motion.p
    //               key={textIndex}
    //               className="billboard"
    //               variants={billBoardAction}
    //               initial="hidden"
    //               animate="visible"
    //               exit="exit"
    //             >
    //               {text[textIndex]}
    //             </motion.p>
    //           </AnimatePresence>
    //         </StUpdateNotice>
    //       </>
    //     )}
    //   </StPersonalBox>
    <StRankingWrapper>
      <StRankingHeader>게임순위</StRankingHeader>
      <StIndividualWrapper>
        <IndividualRanking />
        <IndividualRanking />
        <IndividualRanking />
        <IndividualRanking />
        <IndividualRanking />
        <IndividualRanking />
        <IndividualRanking />
        <IndividualRanking />
        <IndividualRanking />
        <IndividualRanking />
        <IndividualRanking />
      </StIndividualWrapper>
      <StRankingBottom>게임 순위는 1시간마다 업데이트됩니다.</StRankingBottom>
    </StRankingWrapper>
  );
};

const StRankingWrapper = styled.div`
  border-radius: 6px;
  border: solid 1px #110;
  width: 420px;
  height: 100%;
`;

const StRankingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 38px;
  border-radius: 5px 5px 0px 0px;
  background: #111111;

  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const StIndividualWrapper = styled.div`
  height: 704px;
  background-color: #fff;
`;

const StRankingBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 36px;
  border-radius: 0px 0px 5px 5px;
  background: #111111;

  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #eee;
`;

const StPersonalBox = styled.div`
  width: 420px;
  height: 88px;
  border-bottom: 2px;
`;
const StMyRankTopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const StMyRanking = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;
const StMyRankingActive = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  font-size: 11px;
`;

const StMyRankBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 420px;
  height: 64px;
  margin-top: 35px;
  background-color: #efffec;
`;

const StMyRankBottomLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 180px;
  height: 72px;
  gap: 20px;
`;
const StMyProfile = styled.img``;

const StMyRankBottomMid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  height: 36px;
`;

const StMyOverallScore = styled.span``;
const StMyName = styled.span`
  font-weight: bold;
`;

const StRank = styled.div`
  display: flex;
  flex-direction: row;
  width: 50px;
  height: 36px;
`;

const StRankChange = styled.div`
  display: Flex;
  flex-direction: row;
  width: 50px;
  height: 36px;
`;

const StUpdateNotice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 34px;
  border-top: 1px solid black;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  gap: 10px;
  background-color: #111111;
  color: white;
  font-weight: bold;
  font-size: 14px; ;
`;
export default Ranking;
