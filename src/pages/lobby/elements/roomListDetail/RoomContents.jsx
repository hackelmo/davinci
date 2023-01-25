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
            .map((room, i) => (
              <StContainer key={`roomList${i}`}>
                <StLeft>
                  <StButton>
                    {room.currentMembers}/{room.maxMembers}
                  </StButton>
                  <StButton color="#00831D">
                    {room.isWaiting ? "대기" : "진행"}
                  </StButton>
                  <div>◀️</div>
                </StLeft>
                <StMiddle>
                  <StRoomNum>{room.roomId}</StRoomNum>
                  <StRoomName>{room.roomName}</StRoomName>
                </StMiddle>
                <StEnterRoom onClick={() => handleEnterRoom(room.roomId)}>
                  입장
                </StEnterRoom>
              </StContainer>
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

const StLeft = styled.div`
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

const StMiddle = styled.div`
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

const StEnterRoom = styled.div`
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

  cursor: pointer;
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

export default RoomContents;
