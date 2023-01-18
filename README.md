Front-End 프로젝트 약속

1. 회의 / 진행도 체크

   ① 진행도 체크 : 오후 7시 반

   ② dev 병합 회의 : 오후 9시

   ③ 사전 고지없이 회의 불참시 스타벅스 아이스아메리카노 돌리기

2. Git & Github

   ① Git master : 정호영

   ② Git Flow 방식 사용(main-dev-feature/페이지-feature/페이지_기능 / hotfixed)
   
   ③ feature/페이지는 각자 에러없는 기능구현이 끝난 경우에 PR
   
   ④ 기능구현은 feature/페이지_기능에서 작업
   
   ⑤ commit 전 console.log / 불필요 주석 제거
   
   ⑥ PR은 기능단위 feature/페이지 까지(개인)
   
   ⑦ dev 병합은 수시 회의를 통해 필요시 진행

   ⑧ commit rules
      - [ADD] : asset, dependency 추가(이미지 파일)
      - [FEAT] : 새로운 기능 추가(view 포함)
      - [FIX] : 이슈 해결시
      - [PR] : PR 시
      - [CHORE] : 빌드 업무 수정
      - [ECT] : 기타
      
   ⑨ 트러블 슈팅 관리
      - 발생시 : issue에 공유
      - 해결시 : wiki에 저장

3. CSS 순서

   ① position
    
   ② display
   
   ③ width/height
   
   ④ margin/padding
   
   ⑤ color 관련
   
   ⑥ text 관련
   
   ⑦ tranform, transition, animation
   
   ⑧ 기타

4. ECT

   ① 명명규칙
      - react 렌더링하는 (뷰)컴포넌트 jsx 생성 / 그 외(UI, hook)에는 js로 생성
      - camelCase 사용
      - 스타일 컴포넌트, UI 컴포넌트 St 시작
        * 스타일 컴포넌트(Wrapper, Container, Box)
      - thunk 함수 : __함수명 (_ 2개)
      - 함수이름 기능(동사)이름(명사)
        * addCommentLike
	
   ② import 순서
      - react, library, component, func, hook
      
   ③ 함수는 화살표 함수 사용 : ( ) => { } / 기본은 ( ) => 
   
   ④ 훅 사용 규칙
      - 순서 useDispatch, useNavigate, useState, useSelect, 컴스텀 훅 ...상수/ 변수 지정...function, useEffect
      - useSelect 사용시 객체분할로 선언
      
   ⑤ key ={`기능명${i}`}
   
   ⑥ export default 아래에 스타일 컴포넌트
   
   ⑦ mokdata 사용시 import해서 사용, commit 전 삭제
   
   ⑧ 라이브러리 사용시 미리 회의 후 사용 / 개별 테스트는 feature/페이지_기능에서 사용(회의 전 feature/페이지로 PR x)
   
   ⑨ 배열함수 사용시 ((el)=>el.map((item)=> ) )

5. 폴더 구조

   ![폴더](https://user-images.githubusercontent.com/108196588/210312994-c2b5cb92-04d9-459e-af38-397103f09436.jpg)
