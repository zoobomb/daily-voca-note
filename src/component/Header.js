import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <h1>
        <Link to='/'>My Vocabulary Note</Link>
      </h1>
      <div className='menu'>
        <Link to='/create_word' className='link'>
          Add Voca
        </Link>
        <Link to='/create_day' className='link'>
          Add Day
        </Link>
      </div>
    </div>
  );
}

export default Header;
