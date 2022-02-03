import "./App.css"
import React from "react";
import {useRef} from "react"
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { updateBucketFB } from './redux/modules/bucket';

const Update = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const titleRef = useRef('');
  const actorRef = useRef('');
  const exampleRef = useRef('');

  const params = useParams();
  const bucket_id = {bucket_id : params.bucket_id};
  
  const updateBucketList = (bucket_id) => {
    dispatch(updateBucketFB(bucket_id, {
      title: titleRef.current.value,
      actor: actorRef.current.value,
      example: exampleRef.current.value,
    }));
    history.push('/');
  };



return (
    <div>
      <DialogTitle>영화 수정하기</DialogTitle>
          <Card>
          <CardContent>
          <DialogContent>
            
       
          <input className="box"placeholder="  영화 제목"  label= "영화제목"type="text" id="title" ref={titleRef} defaultValue={params.bucket_title}/><br/>
          
          <input className="box"placeholder="  주연 배우" label= "주연"type="text" id="actor" ref={actorRef} defaultValue={params.bucket_actor}/><br/>
          
          <input className="box" placeholder="  장르" label="장르" type="text" id="example" ref={exampleRef} defaultValue={params.bucket_example}/><br/>
        
          </DialogContent>
          </CardContent>
          </Card>
          
        <div>
        <DialogActions>
        <Button variant= "containerd" type='submit' type='button' onClick={() => {
          updateBucketList(bucket_id);
        }}>
          수정하기
        </Button>
        </DialogActions>
        </div>
        </div>
  );
};

export default Update;