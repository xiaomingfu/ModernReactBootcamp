import { withRouter } from "next/router";

const Post = withRouter(props => (
  <h1>YOU ARE POST AT POST #{props.router.query.id}</h1>
));

// Post.getInitialProps = async ({ query }) => {
//   return query;
// };

export default Post;
