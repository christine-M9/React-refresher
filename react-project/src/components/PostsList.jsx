import {useState} from 'react';

import Post from './Post';
import Newpost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}){
   const [posts, setPosts] = useState([]);

   function addPosthandler(postData){
     setPosts((existingPosts) => [postData, ...existingPosts]);
}

    return(
      <>
      {isPosting && (
         <Modal onClose={onStopPosting}>
        <Newpost onCancel={onStopPosting}  onAddPost={addPosthandler}
        />
        </Modal>
        )} 
        <ul className={classes.posts}>
          {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
        </ul>
      </>  
    )

}

export default PostsList;