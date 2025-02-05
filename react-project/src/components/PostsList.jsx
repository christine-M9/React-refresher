import {useState} from 'react';

import Post from './Post';
import Newpost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}){
 
    return(
      <>
      {isPosting && (
         <Modal onClose={onStopPosting}>
        <Newpost onCancel={onStopPosting} 
        />
        </Modal>
        )}  
        <ul className={classes.posts}>
          <Post author="Christine" body="ReactJS is fun!" />
          <Post author="Khekame" body="Check out the full course!" />   
        </ul>
      </>  
    )

}

export default PostsList;