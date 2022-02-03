// 리액트 패키지를 불러옵니다.
import './App.css';
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// redux 훅 중, useSelector를 가져옵니다.
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
const BucketList = (props) => {
const history = useHistory();

// 이 부분은 주석처리!
// console.log(props);
// const my_lists = props.list;
// 여기에서 state는 리덕스 스토어가 가진 전체 데이터예요.
// 우리는 그 중, bucket 안에 들어있는 list를 가져옵니다.
const my_lists = useSelector((state) => state.bucket.list);
console.log(my_lists)
return (
<div>
{my_lists.map((list, index) => {
return (
    
<Card className="Cardimg" variant="outlined">
    <CardContent container
className="list_item"
key={index}
onClick={() => {
history.push("/detail/"+index);

}}
> 

          <Grid container>
   <Typography variant ="outlined" component = "h2">
     {list.title}
        </Typography>
     </Grid>
     <Grid container>
   <Typography variant ="outlined" component = "h2">
          {list.actor}
        </Typography>
 </Grid>
      <div className="blue"> 
  <Typography variant ="outlined" component = "h2">
       {list.example}
      </Typography>
   </div>

</CardContent>
</Card>

);
})}
</div>
);
};

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
overflow-x: hidden;
overflow-y: auto;
max-height: 50vh;
`;


export default BucketList;