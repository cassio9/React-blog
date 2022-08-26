function Nav() {
  return (
    <div className="nav-container">
      <nav className="container">
        <header>
          <h1 className="title">Living the simple life</h1>
          <h6 className="sub-title">A blog exploring minimalism in life</h6>
        </header>
        <ul>
          <li>
            <a href="#" className="current-page">
              HOME
            </a>
          </li>
          <li>
            <a href="#">ABOUT ME</a>
          </li>
          <li>
            <a href="#">RECENT POSTS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
