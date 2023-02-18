import PostItem from './PostItem.js';
import posts from './fullPosts.js';
const PostList = () => {
    return(`
    ${
        posts.map(post => {
            return(PostItem(post));
        }).join('')
        }
    `);
}
export default PostList;
