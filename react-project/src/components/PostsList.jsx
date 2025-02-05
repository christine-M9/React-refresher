import {useState} from 'react';

import Post from './Post';
import Newpost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}){
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');


  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

    return(
      <>
      {isPosting && (
         <Modal onClose={onStopPosting}>
        <Newpost 
        onBodyChange={bodyChangeHandler} 
        onAuthorChange={authorChangeHandler}
        onCancel={onStopPosting} 
        />
        </Modal>
        )};
      
        <ul className={classes.posts}>
          <Post author={enteredAuthor} body={enteredBody} />
          <Post author="Khekame" body="Check out the full course!" />  
        </ul>
      </>  
    )

}

export default PostsList;