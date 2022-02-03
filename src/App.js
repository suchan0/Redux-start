
import React from "react";
import styled from "styled-components";
import { useHistory,Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useRef} from  "react";
import {
createBucket,
loadBucketFB,
addBucketFB,
} from "./redux/modules/bucket";

// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import BucketList from "./BucketList";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Create from "./Create"
import Update from "./Update"
import Button from '@material-ui/core/Button';
import { db } from "./firebase";
import {
collection,
doc,
getDoc,
getDocs,
addDoc,
updateDoc,
deleteDoc
} from "firebase/firestore";


function App() {
const history = useHistory();
const text = React.useRef(null);
const dispatch = useDispatch();

const addBucketList = () => { 
dispatch(addBucketFB({ text: text.current.value, completed: false }));
};
return (
<Input className="App">

  <Input onClick={() =>{
   history.push("/");
  }}>
<Title>홈으로 이동</Title>

</Input>
<Button class="Create-add" onClick={() =>{
  history.push("/Create")
}}>추가</Button>
<Line />
{/* 컴포넌트를 넣어줍니다. */}
{/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
<Switch>
  <Route path="/" exact>
    <BucketList/>
  </Route>
  <Route path="/detail/:index">  
   <Detail />
   </Route> 
  <Route path="/Create" exact>
  <Create/>
  </Route>
  <Route path="/Update" exact>
    <Update/>
  </Route>
  <Route>
    <NotFound />
  </Route>
  
</Switch>

{/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
<button className="scrollTo" onClick={() =>{
  window.scrollTo({top:0 , left:0,behavior:"smooth" });
}}>위로 가기</button>
</Input>

);
}

const Input = styled.div`
max-width: 500px;
min-height: 10vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: 5px;
}
& input {
border: 1px solid #888;
width: 70%;
margin-right: 10px;
}

& input:focus {
outline: none;
border: 1px solid #a673ff;
}

& button {
width: 25%;
color: #fff;
border: #a673ff;
background: #a673ff;
}
`;

const Container = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default App;