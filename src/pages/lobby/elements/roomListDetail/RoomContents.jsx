import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LockOrUnLock from "./RoomLock";
import mockData from "./MockDataRoom";
import { useNavigate } from "react-router-dom";
import { queryKeys } from "../../../../helpers/queryKeys";

const RoomContents = (props) => {
  const navigate = useNavigate();

  const [isWaiting, setIsWaiting] = useState(props.isWaiting);
  const [isPrivate, setIsPrivate] = useState(props.isPrivate);

  useEffect(() => {
    props.handleCheckboxChange(isWaiting, isPrivate);
  }, [isWaiting, isPrivate]);

  const [roomId, setRoomId, error] = useState(1);
  const { data: rooms, status } = useQuery(
    [queryKeys.ROOM_LIST],
    async () => mockData.rooms
  );

  const handleEnterRoom = (roomId) => {
    navigate(`/game/${roomId}`);
  };

  return (
    <StWrapper>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error: {error.message}</div>}
      {status === "success" && (
        <>
          {rooms
            .filter(
              (room) =>
                (!isWaiting || room.isWaiting) && (!isPrivate || room.isPrivate)
            )
            .map((room) => (
              <StContainer>
                <Sta>
                  <StButton>1/4</StButton>
                  <StButton color="#00831D">대기</StButton>
                  <div>◀️</div>
                </Sta>
                <Stb>
                  <StRoomNum>13456</StRoomNum>
                  <StRoomName>초보자 환영! 같이 배우면서 즐겨요.</StRoomName>
                </Stb>
                <Stc>입장</Stc>
              </StContainer>
              // <StRoomMain key={room.roomId}>
              //   <StRoomFirst>
              //     <StParticipants>
              //       <StNumbParticipants>
              //         {room.currentMembers}/{room.maxMembers}
              //       </StNumbParticipants>
              //     </StParticipants>
              //     <StQueue>
              //       <StWaitingOrNot>
              //         {room.isWaiting ? "대기" : "진행"}
              //       </StWaitingOrNot>
              //     </StQueue>
              //     <StLock>
              //       <LockOrUnLock locked={room.isPrivate} />
              //     </StLock>
              //   </StRoomFirst>
              //   <StNumber>
              //     <StRoomNumber>{room.roomId}</StRoomNumber>
              //   </StNumber>
              //   <StName>
              //     <StRoomName>{room.roomName}</StRoomName>
              //   </StName>
              //   <StBtnEnter>
              //     <StEnterGame onClick={() => handleEnterRoom(room.roomId)}>
              //       입장
              //     </StEnterGame>
              //   </StBtnEnter>
              // </StRoomMain>
            ))}
        </>
      )}
    </StWrapper>
  );
};

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  gap: 4px;
  padding: 20px 14px;
`;

const StContainer = styled.div`
  width: 608px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 6px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
`;

const Sta = styled.div`
  width: 94px;
  height: 20px;

  display: flex;
  gap: 4px;
`;

const StButton = styled.div`
  width: 34px;
  height: 20px;

  border: 1px solid ${({ color }) => color || "#111"};
  color: ${({ color }) => color || "#111"};
  border-radius: 999px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
`;

const Stb = styled.div`
  width: 380px;
  display: flex;
  gap: 30px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #000000;

  margin-left: 30px;
`;

const Stc = styled.div`
  width: 48px;
  height: 26px;
  border-radius: 4px;
  border: solid 1px #000;
  background-color: #fff;

  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #222;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 50px;
`;

const StRoomNum = styled.div`
  width: 50px;
  height: 16px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #000000;
`;

const StRoomName = styled.div`
  width: 270px;
  height: 16px;
`;
const StRoomMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 640px;
  height: 44px;
  padding: 10px 18px;
  border: 1px solid #dedede;
  border-radius: 6px;
  gap: 10px;
  background: #ffffff;
`;

const StLock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 50px;
  height: 44px;
`;
const StParticipants = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 30px;
  height: 44px;
`;
const StQueue = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 80px;
  height: 44px;
`;
const StNumber = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 80px;
  height: 44px;
`;
const StName = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  width: 380px;
  height: 44px;
`;
const StBtnEnter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 60px;
  height: 44px;
  &:hover {
    transform: scale(1.1);
  }
`;
const StNumbParticipants = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 50px;
  height: 26px;
  padding: 6px;
  border: 1px solid black;
  border-radius: 14px;
  font-size: 12px;
  font-weight: bold;
  color: black;
`;
const StWaitingOrNot = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 50px;
  height: 26px;
  padding: 6px;
  border: 1px solid green;
  border-radius: 14px;
  font-size: 12px;
  font-weight: bold;
  color: green;
`;

const StRoomFirst = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 150px;
  height: 26px;
`;
const StRoomNumber = styled.span``;
const StEnterGame = styled.button`
  width: 60px;
  padding: 6px;
  background-color: white;
  font-size: 14px;
  font-weight: bold;
`;

export default RoomContents;
