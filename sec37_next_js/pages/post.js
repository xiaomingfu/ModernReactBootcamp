import { withRouter } from "next/router";
import axios from "axios";
// const Post = withRouter(props => (
//     <h1>YOU ARE POST AT POST #{props.router.query.id}</h1>));
const Post = ({ id, comments }) => (
  <div>
    <h1>Comment for Post #{id}</h1>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id}></Comment>
    ))}
  </div>
);

const Comment = ({ email, body }) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
);

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?${query.id}`
  );
  const { data } = res;
  return { ...query, comments: data };
};

export default Post;
