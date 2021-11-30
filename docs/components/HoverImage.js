import Image from "next/image"
const HoverImage = ({ src, alt, children }) => {
  return (
    <figure className="HoverImage">
      <figcaption className="hover-title">{children}</figcaption>
      <div className="hover-image">
        <Image src={src} alt={alt} />
      </div>
    </figure>
  )
}

export default HoverImage;
