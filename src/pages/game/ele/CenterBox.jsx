import React from "react";
import styled from "styled-components";
import IntroTile from "../logic/IntroTile";
import { iconTimer } from "../../Icons";

const CenterBox = () => {
  return (
    <StWrapper>
      <StGameField>
        <StOnGoingStatus>
          정말정말긴이름인데너무함님이 상대 지목을 진행 중입니다.
        </StOnGoingStatus>
        <IntroTile />
      </StGameField>
      <StTimer>
        <img src={iconTimer} alt="icon" />
        <StTimerBar>
          <StTimeLimit />
        </StTimerBar>
        <div>남은시간 25초</div>
      </StTimer>
    </StWrapper>
  );
};

export default CenterBox;

const StWrapper = styled.div`
  height: 364px;
  border: 1px solid #c2c2c2;
  width: 100%;
  margin-top: 8px;
  border-radius: 6px;
  border: solid 1px #111;
  background-color: #fff;
`;

const StGameField = styled.div`
  width: 100%;
  height: 324px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StOnGoingStatus = styled.div`
  margin: 10px;
  background: #eeeeee;
  padding: 4px 16px;
  border-radius: 6px;
  border: solid 1px #111;
  background-color: #111;

  left: 0;
  top: 0;
  color: #ffdf24;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
`;

const StTimer = styled.div`
  height: 40px;
  border-top: solid 1px #ccc;
  background-color: #e1e1e1;
  border-radius: 0 0 6px 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #222;
`;

const StTimerBar = styled.div`
  width: 486px;
  height: 16px;
  border: solid 1px #000;
  background-color: #fff;
  border-radius: 4px;
`;

const StTimeLimit = styled.div`
  height: 100%;
  width: 400px;
  background-color: #009320;
  border-radius: 3px 0 0 3px;
`;
