import Post from './Post';
import classes from './PostsList.module.css';

function PostsList(){
    return(
        <ul className={classes.posts}>
          <Post author="Christine" body="React.js is awesome!" />
          <Post author="Khekame" body="Check out the full course!" />  
        </ul>
    )

}

export default PostsList;