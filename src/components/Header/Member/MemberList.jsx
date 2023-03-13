function MemberList({ href, className, text, img }) {
  return (
    <li>
      <a href={href} className={className}>
        {text}
        {img === undefined ? null : (
          <img
            alt=" "
            src={img}
            style={{
              paddingLeft: '10px',
            }}
          />
        )}
      </a>
    </li>
  )
}

// MemberList.propTypes ={
//  className : String,

// }

export default MemberList
