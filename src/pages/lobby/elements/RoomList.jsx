import React from "react";
import styled from "styled-components";
import RoomContents from "./roomListDetail/RoomContents";
import { useState } from "react";
import ModalCreateRoom from "./ModalCreateRoom";
import { motion } from "framer-motion";
import QuickStart from "./roomListDetail/RoomQuickStart";

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const RoomList = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [showCreateRoom, setShowCreateRoom] = useState(false);

  const handleCheckboxChange = (isWaiting, isPrivate) => {
    setIsWaiting(isWaiting);
    setIsPrivate(isPrivate);
  };
  return (
    <StWrapper>
      <StRoomListHeader>방 리스트</StRoomListHeader>
      <StSearchRoom>
        <StBtnList>
          <StCheckButton color="#eee">
            <input
              type="checkbox"
              id="standby"
              checked={isWaiting}
              onChange={() => setIsWaiting(!isWaiting)}
            />
            <label htmlFor="standby">대기방</label>
          </StCheckButton>
          <StCheckButton color="#00831d">
            <input
              type="checkbox"
              id="privacyControl"
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
            />
            <label htmlFor="privacyControl">비공개</label>
          </StCheckButton>
        </StBtnList>
        <StFuncBack>
          <StSelect name="pets" id="pet-select">
            <option value="all">전체</option>
            <option value="roomnumber">방번호</option>
            <option value="roomname">방제목</option>
          </StSelect>
          <StSearchBarStyle type="text" placeholder="방 제목을 입력해주세요." />
          <StRefreshBtn>ㅁ새로고침</StRefreshBtn>
        </StFuncBack>
      </StSearchRoom>
      <StRoomList>
        <RoomContents
          handleCheckboxChange={handleCheckboxChange}
          isWaiting={isWaiting}
          isPrivate={isPrivate}
        ></RoomContents>
      </StRoomList>
      <StRoomListBottom>
        <StPagination>
          <div>≪</div>
          <div>﹤</div>
          <StPages>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </StPages>
          <div>﹥</div>
          <div>≫</div>
        </StPagination>
        <StButton
          variants={buttonVariants}
          whileHover="hover"
          color="#fff"
          onClick={() => setShowCreateRoom(true)}
        >
          방 만들기
        </StButton>
        {showCreateRoom && (
          <ModalCreateRoom
            modal
            closeModal={() => {
              setShowCreateRoom(!showCreateRoom);
            }}
          ></ModalCreateRoom>
        )}
        <StButton variants={buttonVariants} whileHover="hover" color="#FFDF24">
          바로 시작
        </StButton>
      </StRoomListBottom>
    </StWrapper>

    //   <StBotButtons>
    //     <StCreateRoomBtn onClick={() => setShowCreateRoom(true)}>
    //       방 만들기
    //     </StCreateRoomBtn>
    //     {showCreateRoom && (
    //       <ModalCreateRoom
    //         modal
    //         closeModal={() => {
    //           setShowCreateRoom(!showCreateRoom); // <- 이거를 내려받음 누구요
    //         }}
    //       ></ModalCreateRoom>
    //     )}
    //     <QuickStart>바로시작</QuickStart>
    //   </StBotButtons>
  );
};

const StWrapper = styled.div`
  border-radius: 6px;
  border: solid 1px #110;
  width: 650px;
  height: 100%;
`;

const StRoomListHeader = styled.div`
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

const StSearchRoom = styled.div`
  height: 44px;
  width: 100%;
  background-color: #4a4a4a;
  padding: 0 22px;
  display: flex;
  align-items: center;
`;

const StRoomList = styled.div`
  width: 100%;
  height: 624px;
  background-color: transparent;
`;

const StRoomListBottom = styled.div`
  height: 72px;
  width: 100%;
  padding: 14px 20px;
  border-radius: 0 0 5px 5px;
  background: #111111;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StBtnList = styled.div`
  display: flex;
`;

const StCheckButton = styled.div`
  width: 64px;
  height: 26px;

  border: 1px solid #000000;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  gap: 2px;

  & input[type="checkbox"] {
    width: 12px;
    height: 12px;
    border: none;
  }
`;

const StSelect = styled.select`
  width: 85px;
  height: 26px;
  background-color: #333;
  border: 1px solid #000000;
  border-radius: 4px;
  padding-left: 12px;

  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #ffffff;
  &:focus {
    outline: none;
  }
`;

const StPagination = styled.div`
  width: 330px;
  height: 44px;
  gap: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* color: rgba(255, 255, 255, 0.2); */
  color: #aaaaaa;

  & div {
    cursor: pointer;
  }
`;

const StButton = styled(motion.div)`
  width: 130px;
  height: 44px;
  border-radius: 6px;
  background-color: ${({ color }) => color};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #000;

  cursor: pointer;
`;

const StFuncBack = styled.div`
  display: flex;
  flex-direction: row;
  height: 26px;
  width: 100%;
  margin-left: 8px;
`;

const StSearchBarStyle = styled.input`
  width: 284px;
  height: 26px;
  padding-left: 14px;
  border-radius: 4px;
  border: solid 1px #000;
  background-color: #333;

  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #888;
  margin-left: 4px;

  &:focus {
    outline: none;
  }
`;
const StRefreshBtn = styled.button`
  width: 76px;
  height: 26px;
  background: #232323;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-left: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

const StPages = styled.div`
  display: flex;
  gap: 18px;
  margin: 0 12px;
`;

export default RoomList;
