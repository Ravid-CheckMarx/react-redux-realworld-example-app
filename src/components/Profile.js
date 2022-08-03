import React, { memo, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ArticleList from './ArticleList';
import {
  getArticlesByAuthor,
  getFavoriteArticles,
} from '../reducers/articleList';
import {
  follow,
  unfollow,
  getProfile,
  profilePageUnloaded,
} from '../reducers/profile';
import { selectUser } from '../features/auth/authSlice';

/**
 * Go to profile settings
 *
 * @example
 * <EditProfileSettings />
 */
function EditProfileSettings() {
  return (
    <Link
      to="/settings"
      className="btn btn-sm btn-outline-secondary action-btn"
    >
      <i className="ion-gear-a" /> Edit Profile Settings
    </Link>
  );
}

/**
 * Follow or unfollow an user
 *
 * @param {Object} props
 * @param {String} props.username
 * @param {Boolean} props.following
 * @example
 * <FollowUserButton username="warren_boyd" following />
 */
function FollowUserButton({ username, following }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  let classes = 'btn btn-sm action-btn';
  let textMessage;

  if (following) {
    classes += ' btn-secondary';
    textMessage = `Unfollow ${username}`;
  } else {
    classes += ' btn-outline-secondary';
    textMessage = `Follow ${username}`;
  }

  const handleClick = () => {
    if (!currentUser) {
      navigate.push(`/register?redirectTo=${location.pathname}`);
      return;
    }

    if (following) {
      dispatch(unfollow(username));
    } else {
      dispatch(follow(username));
    }
  };

  return (
    <button className={classes} onClick={handleClick}>
      <i className="ion-plus-round" />
      &nbsp;
      {textMessage}
    </button>
  );
}

/**
 * Show the profile of an user
 *
 * @param {Object} props
 * @param {Object} props.profile
 * @example
 * <UserInfo profile={{
 *      username: 'warren_boyd',
 *      email: 'warren.boyd@mailinator.com',
 *      image: 'jpg',
 *      bio: null,
 *      following: false,
 *    }}
 * />
 */
function UserInfo({ profile }) {
  const currentUser = useSelector(selectUser);
  const isCurrentUser = profile.username === currentUser?.username;

  let jpg =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCACAAIABAREA/8QAHAABAAEFAQEAAAAAAAAAAAAAAAYBBAUHCAMC/8QANBAAAQQBAgQEBgEBCQAAAAAAAQACAwQFBhEHITFBCBJRYRMUcYGRoVIjFSJEYnJzgpKy/9oACAEBAAA/AJwiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi+69eW3YZBXiksWJOTIYWF73fQDmVKo+EmtpoPit0tkvJtvzjDT/wBSd/0o1kcbcxFt1W/Uno2m9YbMZjf9dirdERXmJwuQz9r5bGULORsDrHViMhH126fdZ+zwn1pTgM0ulskIwNyWxB5A+jST+lFXsdFK+KRjo5WHZ8b2lrmn0IPMKiIiLM6P0rd1tqOlhseAJ7Lucjhu2Jg5ue72A/J2Hddg6W0bprhJp+WSD4NOOJnmt5S24CST3c89B6NHL0Cjk/iU0NDcMIt3pmb7fMx03GP689iR9lI8yzR/E/R0tm7Yp5LBhjnm6HhprbDm4O6xuHvt7hcUTCMTyiF7pIQ9wje4bFzNz5SR2JGxXwivsFBRtZzHQ5Od1XGyWI2Wp2dY4i4Bzh6cu/bqu0pcjpPhRpiH+tTwuIA/pCPmZjt1AG7pHH15qMY/xI6Hu3BC67bpAnYT2qrmx/cjfYe5WY19w0wHFPDtlf8ABbcdH5qmXrbOcNxy3I5PYfQ/bYrjzOYS5pvM3MVkIvg3akpilaOm46EeoI2IPoVYoiLMaS1bk9E5yHLYmZsNqMFhD2+ZkjD1Y4dwdh+As7xF4tZviYKsWRbBUpVj52U6nmDHP/m7ckuI7eihSqHODHsDnBj9vO0OIDtum47/AHVERFVznODA5znBg8rA5xPlHoN+g+iop7w+40Z/hzjJ8dRZWu0XuL44LgcRA89SzYjkepb0358tyoln89f1RmbWVyc5s3rLvNJJtsOQ2AA7AAAAeyx6IiIiIiIiIiIiIi2Dwj4Rz8ULVyR93+z8ZTLWSzMaHyOe4bhrQeXTmSfZWPE3hblOGmT8lkG3ipnbVsi1uzX/AOV/8X+3ft7QxERbK4ScFrvEWUXrpmx2nmf4loAksO/jFuNtvV223Yb9sfxd4Yu4Y56vWjt/O0Lkbpa0jwBIA0gOa8DluNxzHXf2UFRERERSnh5xFynDfNfO0CJq0uzbVKR2zJ2j/wAuHPZ3b3C6x0prbTXFjByxVjDcZIzy2sXcYDJH7PYeo9HDce615qzwtYrISPn09kpMQ93P5Sy0zQD2ad/M0fcrX9zwy61rSEQjG3G9nR2vL+nNC9cd4YNYW3j5qfGY9ndz53SkfZref5WzdG+GfT2Bljs5iaTUNppBEUrPh1gf9sEl3/IkeykfEXi9geGtP5dzmXMqGAQYusQC0dvPtyjb+/QFclas1Zk9bZyfLZaf41qX+6Gt5MiYOjGDs0fvqeaxCIiIiIvWpbnoWo7NWeWrZiO8c8Dyx7D7OHMLaWm/Erq7CRsivCrnYW8t7TPhzbf62dfuCppW8WdQxj5nS9lsnf4Ftjm/sBed7xaR/DIo6XkL/W1cAH4a0qAao8QWstSxvhjuRYas7kY8awseR7yEl342WuHEue57iXPcfM5zjuXH1JPUqiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIv/9k=';
  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img
              src={profile.image || jpg}
              className="user-img"
              alt={profile.username}
            />
            <h4>{profile.username}</h4>
            <p>{profile.bio}</p>

            {isCurrentUser ? (
              <EditProfileSettings />
            ) : (
              <FollowUserButton
                username={profile.username}
                following={profile.following}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Profile's navigation
 *
 * @param {Object}  props
 * @param {String}  props.username
 * @param {Boolean} props.isFavorites
 * @example
 * <ProfileTabs username="warren_boyd" isFavorites />
 */
function ProfileTabs({ username, isFavorites }) {
  return (
    <div className="articles-toggle">
      <ul className="nav nav-pills outline-active">
        <li className="nav-item">
          <Link
            className={isFavorites ? 'nav-link' : 'nav-link active'}
            to={`/@${username}`}
          >
            My Articles
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={isFavorites ? 'nav-link active' : 'nav-link'}
            to={`/@${username}/favorites`}
          >
            Favorited Articles
          </Link>
        </li>
      </ul>
    </div>
  );
}

/**
 * Profile screen component
 * @param {import('react-router-dom').RouteComponentProps<{ username: string }>} props
 * @example
 * <Profile />
 */
function Profile({ location, isFavoritePage }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const { username } = useParams();

  useEffect(() => {
    const fetchProfile = dispatch(getProfile(username));
    const fetchArticles = dispatch(
      isFavoritePage
        ? getFavoriteArticles({ username })
        : getArticlesByAuthor({ author: username })
    );

    return () => {
      fetchProfile.abort();
      fetchArticles.abort();
    };
  }, [username, isFavoritePage]);

  useEffect(() => () => dispatch(profilePageUnloaded()), []);

  if (!profile) {
    return null;
  }

  return (
    <div className="profile-page">
      <UserInfo profile={profile} />

      <div className="container page">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <ProfileTabs
              username={profile.username}
              isFavorites={isFavoritePage}
            />

            <ArticleList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Profile);
