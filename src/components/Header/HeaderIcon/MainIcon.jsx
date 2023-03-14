function MainIcon({ href, img, alt }) {
  return (
    <a href={href}>
      <img src={img} alt={alt} />
    </a>
  )
}

// MainIcon.propTypes = {
//   href: String,
//   img: String,
//   alt: String,
// }

export default MainIcon
