import "./App.css"
import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Button';
import Title from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { useSelector } from "react-redux";
import { createBucketFB,loadBucketFB,addBucketFB } from './redux/modules/bucket';

  const Create = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const titleRef =React.useRef('');
  const actorRef = React.useRef('');
  const exampleRef = React. useRef('');
  
  React.useEffect( () => {
    dispatch(loadBucketFB());
    }, []);  
  const addBucketList = () => {
    dispatch(addBucketFB({
      title: titleRef.current.value,
      actor: actorRef.current.value, 
      example: exampleRef.current.value,
      completed: false,
    }));
    history.push("/");
  };

  return (
    <div>
      <DialogTitle>영화 추가하기</DialogTitle>
          <Card>
          <CardContent>
          <DialogContent>
            
          <div >
          <input className="box"placeholder="  영화 제목"  label= "영화제목"type="text" id="title" ref={titleRef}/><br/>
          
          <input className="box"placeholder="  주연 배우" label= "주연"type="text" id="actor" ref={actorRef}/><br/>
          
          <input className="box" placeholder="  장르" label="장르" type="text" id="example" ref={exampleRef}/><br/>
          </div>
          </DialogContent>
          </CardContent>
          </Card>
          
        <div>
        <DialogActions>
        <Button variant= "containerd" type='submit' onClick={addBucketList}>
          추가하기
        </Button>
        </DialogActions>
        </div>
        </div>
   
  );
};



const CreateTitle = styled.h2`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;






export default Create;
