import React, { useState } from "react";
import "./style/App.css";
import { Button } from "@chakra-ui/react";
import { Modal } from "./Comp/Modal";

function App(props) {
  let logo = "ReactBlog";
  let post = "강남 우동 맛집";
  let [titleName, handleBtnChange] = useState([
    "남성 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  const [좋아요, numberPlus] = useState([0, 0, 0]);

  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>{logo}</h4>
      </div>
      <Button
        // 버튼 클릭시 글제목 교체
        // [...state명] 의 뜻 꼭 알기.
        onClick={() => {
          let copy = [...titleName];
          copy[0] = "여자 코트 추천";
          copy[1] = "교대 우동맛집";
          handleBtnChange(copy);
        }}
        colorScheme="teal"
        variant="outline"
      >
        여성 코트
      </Button>
      <Button
        // 버튼 클릭시 정렬 기능
        // [...state명] 의 뜻 꼭 알기.
        onClick={() => {
          let copy = [...titleName];
          copy = copy.sort();
          handleBtnChange(copy);
        }}
        colorScheme="teal"
        variant="solid"
      >
        정 렬
      </Button>
      {modal == true ? <Modal /> : null}
      <Button
        onClick={() => {
          // modal == false ? setModal(true) : setModal(false);
          setModal(!modal);
          // false 일때는 true 로, true 일때는 false 로 바뀌도록
          // 아니라면 조건을 주는 느낌표(!) 기호를 넣어 토글키처럼 활용가능하다.
        }}
      >
        모달창 여닫기
      </Button>
      {/*<div className="list">*/}
      {/*  <h4>*/}
      {/*    {titleName[0]}*/}
      {/*    <span*/}
      {/*      // span내용 클릭시 좋아요state +1*/}
      {/*      onClick={() => {*/}
      {/*        numberPlus(좋아요 + 1);*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      👍*/}
      {/*    </span>*/}
      {/*    {좋아요}*/}
      {/*  </h4>*/}
      {/*  <p>11월 4일 발행</p>*/}
      {/*</div>*/}
      {/*<div className="list">*/}
      {/*  <h4>{titleName[1]}</h4>*/}
      {/*  <p>11월 4일 발행</p>*/}
      {/*</div>*/}
      {/*<div className="list">*/}
      {/*  <h4>{titleName[2]}</h4>*/}
      {/*  <p>11월 4일 발행</p>*/}
      {/*</div>*/}
      {titleName.map(function (a, i) {
        return (
          <div className="list">
            <h4>
              {a}
              <span
                // span내용 클릭시 좋아요state +1
                onClick={() => {
                  let copy = [...좋아요];
                  copy[i] = copy[i] + 1;
                  numberPlus(copy);
                }}
              >
                👍
              </span>
              {좋아요[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
