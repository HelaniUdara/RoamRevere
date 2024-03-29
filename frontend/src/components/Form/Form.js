import React, {useState} from 'react'
import { TextField, Typography, Button, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';


const Form = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  } 

  const clear = ()=>{
  }

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });
  

  return (
    <Paper >
      <form  autoCapitalize='off' noValidate onSubmit={handleSubmit} >
          <Typography variant='h6'>Add another wonderful place</Typography>
          <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})}></TextField>
          <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})}></TextField>
          <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}></TextField>
          <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})}></TextField>
          <div >
           <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
          </div>
          <Button variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
          <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>

      </form>
    </Paper>
  )
}

export default Form;


