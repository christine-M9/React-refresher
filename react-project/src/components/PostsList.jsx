import {useState} from 'react';

import Post from './Post';
import Newpost from './NewPost';
import classes from './PostsList.module.css';

function PostsList(){
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
        <Newpost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        <ul className={classes.posts}>
          <Post author={enteredAuthor} body={enteredBody} />
          <Post author="Khekame" body="Check out the full course!" />  
        </ul>
      </>  
    )

}

export default PostsList;