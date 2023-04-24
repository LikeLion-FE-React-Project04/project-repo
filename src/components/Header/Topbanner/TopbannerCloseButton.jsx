function TopbannerCloseButton({ type, className, handler, img, alt }) {
  return (
    <button type={type} className={className} onClick={handler}>
      <img src={img} alt={alt} />
    </button>
  )
}

export default TopbannerCloseButton
