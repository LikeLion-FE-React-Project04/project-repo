import { Link } from 'react-router-dom';

function MemberList({ href, className, text, img, onClick }) {
  return (
    <li>
      <Link to={href} className={className} onClick={onClick}>
        {text}
        {img === undefined ? null : (
          <img
            alt="고객센터 목록"
            src={img}
            style={{
              paddingLeft: '10px',
            }}
          />
        )}
      </Link>
    </li>
  );
}

// MemberList.propTypes ={
//  className : String,

// }

export default MemberList;
