export default function ShowComments({ comments }) {
  return (
    <div>
      <h2>Show Comments</h2>

      {comments.length === 0 ? (
        <p>No comments yet!</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index}>
            <h4>{comment.username}</h4>
            <p>Remark: {comment.remark}</p>
            <p>Rating: {comment.rating}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}