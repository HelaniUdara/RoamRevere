import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';


const Post = ({post}) => {
  return (
    <Card>
      <CardMedia image={post.selectedFile} title={post.title}/>
      <div>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.CreatedAt).fromNow()}</Typography>
      </div>
      <div>
        <Button size='small' color='primary' onClick={()=>{}}>
          <MoreHorizIcon fontSize='default'/>
        </Button>
      </div>
      <div>
        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=>`#${tag} `)}</Typography>
      </div>
      <CardContent>
              <Typography variant='h5' gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary' onClick={()=>{}}>
          <ThumbUpAltIcon fontSize='small'/>
          Like
          {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={()=>{}}>
          <DeleteIcon fontSize='small'/>
          Delete
        </Button>
    </CardActions>
    </Card>
  )
}

export default Post;