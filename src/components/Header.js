import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuthenticated, selectUser } from '../features/auth/authSlice';

/**
 * Navbar when there isn't a logged user
 *
 * @example
 * <LoggedOutNavbar />
 */
function LoggedOutNavbar() {
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Sign in
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Sign up
        </Link>
      </li>
    </ul>
  );
}

/**
 * Navbar when there is a logged user
 *
 * @example
 * <LoggedInNavbar />
 */
function LoggedInNavbar() {
  const currentUser = useSelector(selectUser);

  let jpg =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/wAALCACAAIABAREA/8QAHAABAAEFAQEAAAAAAAAAAAAAAAYBBAUHCAMC/8QANBAAAQQBAgQEBgEBCQAAAAAAAQACAwQFBhEHITFBCBJRYRMUcYGRoVIjFSJEYnJzgpKy/9oACAEBAAA/AJwiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi+69eW3YZBXiksWJOTIYWF73fQDmVKo+EmtpoPit0tkvJtvzjDT/wBSd/0o1kcbcxFt1W/Uno2m9YbMZjf9dirdERXmJwuQz9r5bGULORsDrHViMhH126fdZ+zwn1pTgM0ulskIwNyWxB5A+jST+lFXsdFK+KRjo5WHZ8b2lrmn0IPMKiIiLM6P0rd1tqOlhseAJ7Lucjhu2Jg5ue72A/J2Hddg6W0bprhJp+WSD4NOOJnmt5S24CST3c89B6NHL0Cjk/iU0NDcMIt3pmb7fMx03GP689iR9lI8yzR/E/R0tm7Yp5LBhjnm6HhprbDm4O6xuHvt7hcUTCMTyiF7pIQ9wje4bFzNz5SR2JGxXwivsFBRtZzHQ5Od1XGyWI2Wp2dY4i4Bzh6cu/bqu0pcjpPhRpiH+tTwuIA/pCPmZjt1AG7pHH15qMY/xI6Hu3BC67bpAnYT2qrmx/cjfYe5WY19w0wHFPDtlf8ABbcdH5qmXrbOcNxy3I5PYfQ/bYrjzOYS5pvM3MVkIvg3akpilaOm46EeoI2IPoVYoiLMaS1bk9E5yHLYmZsNqMFhD2+ZkjD1Y4dwdh+As7xF4tZviYKsWRbBUpVj52U6nmDHP/m7ckuI7eihSqHODHsDnBj9vO0OIDtum47/AHVERFVznODA5znBg8rA5xPlHoN+g+iop7w+40Z/hzjJ8dRZWu0XuL44LgcRA89SzYjkepb0358tyoln89f1RmbWVyc5s3rLvNJJtsOQ2AA7AAAAeyx6IiIiIiIiIiIiIi2Dwj4Rz8ULVyR93+z8ZTLWSzMaHyOe4bhrQeXTmSfZWPE3hblOGmT8lkG3ipnbVsi1uzX/AOV/8X+3ft7QxERbK4ScFrvEWUXrpmx2nmf4loAksO/jFuNtvV223Yb9sfxd4Yu4Y56vWjt/O0Lkbpa0jwBIA0gOa8DluNxzHXf2UFRERERSnh5xFynDfNfO0CJq0uzbVKR2zJ2j/wAuHPZ3b3C6x0prbTXFjByxVjDcZIzy2sXcYDJH7PYeo9HDce615qzwtYrISPn09kpMQ93P5Sy0zQD2ad/M0fcrX9zwy61rSEQjG3G9nR2vL+nNC9cd4YNYW3j5qfGY9ndz53SkfZref5WzdG+GfT2Bljs5iaTUNppBEUrPh1gf9sEl3/IkeykfEXi9geGtP5dzmXMqGAQYusQC0dvPtyjb+/QFclas1Zk9bZyfLZaf41qX+6Gt5MiYOjGDs0fvqeaxCIiIiIvWpbnoWo7NWeWrZiO8c8Dyx7D7OHMLaWm/Erq7CRsivCrnYW8t7TPhzbf62dfuCppW8WdQxj5nS9lsnf4Ftjm/sBed7xaR/DIo6XkL/W1cAH4a0qAao8QWstSxvhjuRYas7kY8awseR7yEl342WuHEue57iXPcfM5zjuXH1JPUqiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIv/9k=';
  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/editor" className="nav-link">
          <i className="ion-compose" />
          &nbsp;New Post
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/settings" className="nav-link">
          <i className="ion-gear-a" />
          &nbsp;Settings
        </Link>
      </li>

      <li className="nav-item">
        <Link to={`/@${currentUser?.username}`} className="nav-link">
          <img
            src={currentUser?.image || jpg}
            className="user-pic"
            alt={currentUser?.username}
          />
          {currentUser?.username}
        </Link>
      </li>
    </ul>
  );
}

/**
 * App header
 *
 * @example
 * <Header />
 */
function Header() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const appName = useSelector((state) => state.common.appName);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="nav-logo">
            c{'{'}
            {<span style={{ color: '#FB86B6' }}>api</span>}
            {'}'}tal
          </span>
          {
            //appName.toLowerCase()
          }
        </Link>

        {isAuthenticated ? <LoggedInNavbar /> : <LoggedOutNavbar />}
      </div>
    </nav>
  );
}

export default memo(Header);
