import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import {
  getCommentsForArticle,
  removeComment,
  selectAllComments,
  selectIsAuthor,
  selectIsLoading,
} from './commentsSlice';

/**
 * Delete a comment
 *
 * @param {object}  props
 * @param {number}  props.commentId
 * @example
 * <DeleteCommentButton commentId={1} />
 */
function DeleteCommentButton({ commentId }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { slug } = useParams();

  /**
   * @type {React.MouseEventHandler<HTMLButtonElement>}
   */
  const deleteComment = () => {
    dispatch(removeComment({ articleSlug: slug, commentId }));
  };

  return (
    <button
      className="btn btn-sm btn-link mod-options"
      disabled={isLoading}
      onClick={deleteComment}
    >
      <i className="ion-trash-a" />
      <span className="sr-only">Delete comment</span>
    </button>
  );
}

/**
 *
 * @param {object} props
 * @param {import('../../agent').Comment} props.comment
 * @example
 * <Comment
 *    comment={{
 *      id: 1,
 *      createdAt: "2016-02-18T03:22:56.637Z",
 *      updatedAt: "2016-02-18T03:22:56.637Z",
 *      body: "It takes a Jacobian",
 *      author: {
 *        username: "jake",
 *        bio: "I work at statefarm",
 *        image: "https://i.stack.imgur.com/xHWG8.jpg",
 *        following: false,
 *      },
 *    }}
 * />
 */
function Comment({ comment }) {
  const isAuthor = useSelector(selectIsAuthor(comment.id));

  let jpg =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCACAAIABAREA/8QAHAABAAEFAQEAAAAAAAAAAAAAAAYBBAUHCAMC/8QANBAAAQQBAgQEBgEBCQAAAAAAAQACAwQFBhEHITFBCBJRYRMUcYGRoVIjFSJEYnJzgpKy/9oACAEBAAA/AJwiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi+69eW3YZBXiksWJOTIYWF73fQDmVKo+EmtpoPit0tkvJtvzjDT/wBSd/0o1kcbcxFt1W/Uno2m9YbMZjf9dirdERXmJwuQz9r5bGULORsDrHViMhH126fdZ+zwn1pTgM0ulskIwNyWxB5A+jST+lFXsdFK+KRjo5WHZ8b2lrmn0IPMKiIiLM6P0rd1tqOlhseAJ7Lucjhu2Jg5ue72A/J2Hddg6W0bprhJp+WSD4NOOJnmt5S24CST3c89B6NHL0Cjk/iU0NDcMIt3pmb7fMx03GP689iR9lI8yzR/E/R0tm7Yp5LBhjnm6HhprbDm4O6xuHvt7hcUTCMTyiF7pIQ9wje4bFzNz5SR2JGxXwivsFBRtZzHQ5Od1XGyWI2Wp2dY4i4Bzh6cu/bqu0pcjpPhRpiH+tTwuIA/pCPmZjt1AG7pHH15qMY/xI6Hu3BC67bpAnYT2qrmx/cjfYe5WY19w0wHFPDtlf8ABbcdH5qmXrbOcNxy3I5PYfQ/bYrjzOYS5pvM3MVkIvg3akpilaOm46EeoI2IPoVYoiLMaS1bk9E5yHLYmZsNqMFhD2+ZkjD1Y4dwdh+As7xF4tZviYKsWRbBUpVj52U6nmDHP/m7ckuI7eihSqHODHsDnBj9vO0OIDtum47/AHVERFVznODA5znBg8rA5xPlHoN+g+iop7w+40Z/hzjJ8dRZWu0XuL44LgcRA89SzYjkepb0358tyoln89f1RmbWVyc5s3rLvNJJtsOQ2AA7AAAAeyx6IiIiIiIiIiIiIi2Dwj4Rz8ULVyR93+z8ZTLWSzMaHyOe4bhrQeXTmSfZWPE3hblOGmT8lkG3ipnbVsi1uzX/AOV/8X+3ft7QxERbK4ScFrvEWUXrpmx2nmf4loAksO/jFuNtvV223Yb9sfxd4Yu4Y56vWjt/O0Lkbpa0jwBIA0gOa8DluNxzHXf2UFRERERSnh5xFynDfNfO0CJq0uzbVKR2zJ2j/wAuHPZ3b3C6x0prbTXFjByxVjDcZIzy2sXcYDJH7PYeo9HDce615qzwtYrISPn09kpMQ93P5Sy0zQD2ad/M0fcrX9zwy61rSEQjG3G9nR2vL+nNC9cd4YNYW3j5qfGY9ndz53SkfZref5WzdG+GfT2Bljs5iaTUNppBEUrPh1gf9sEl3/IkeykfEXi9geGtP5dzmXMqGAQYusQC0dvPtyjb+/QFclas1Zk9bZyfLZaf41qX+6Gt5MiYOjGDs0fvqeaxCIiIiIvWpbnoWo7NWeWrZiO8c8Dyx7D7OHMLaWm/Erq7CRsivCrnYW8t7TPhzbf62dfuCppW8WdQxj5nS9lsnf4Ftjm/sBed7xaR/DIo6XkL/W1cAH4a0qAao8QWstSxvhjuRYas7kY8awseR7yEl342WuHEue57iXPcfM5zjuXH1JPUqiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIv/9k=';
  return (
    <div className="card" data-testid="comment">
      <div className="card-block">
        <p className="card-text">{comment.body}</p>
      </div>

      <div className="card-footer">
        <Link to={`/@${comment.author.username}`} className="comment-author">
          <img
            className="comment-author-img"
            alt={comment.author.username}
            src={comment.author.image ?? jpg}
          />
        </Link>
        &nbsp;
        <Link to={`/@${comment.author.username}`} className="comment-author">
          {comment.author.username}
        </Link>
        <time className="date-posted" dateTime={comment.createdAt}>
          {new Date(comment.createdAt).toDateString()}
        </time>
        {isAuthor ? <DeleteCommentButton commentId={comment.id} /> : null}
      </div>
    </div>
  );
}

/**
 * List all comments of an article
 *
 * @example
 * <CommentList />
 */
function CommentList() {
  const dispatch = useDispatch();
  const comments = useSelector(selectAllComments);
  const isLoading = useSelector(selectIsLoading);
  const { slug } = useParams();

  useEffect(() => {
    const fetchComments = dispatch(getCommentsForArticle(slug));

    return () => {
      fetchComments;
    };
  }, [slug]);

  if (isLoading) {
    return <p>Loading comments</p>;
  }

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default memo(CommentList);
