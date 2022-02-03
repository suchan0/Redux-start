import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket, deleteBucketFB, updateBucket, updateBucketFB } from "./redux/modules/bucket";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Detail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const bucket_index = params.index;
    const bucket_list = useSelector((state) => state.bucket.list);
    

return (
    <div className="between"> 
        <Button 
        variant="outlined"
        color="primary"
        onClick={() => {
            history.push ("/Update");
            
        }}> 수정하기</Button>

        <h1>{bucket_list[bucket_index]? bucket_list[bucket_index].text : ""}</h1>
        <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
            dispatch(deleteBucketFB(bucket_list[bucket_index].id));
            history.goBack();
        }}>삭제하기</Button>
    </div>
    
);

};

export default Detail;