import Image from "../components/Image"

// A wrapper for text or another element that shows an image on hover
const HoverImage = ({ src, alt, children }) => {
  return (
    <span className="HoverImage">
      <span className="hover-title">{children}</span>
      <span className="hover-image">
        <Image src={src} alt={alt} loader={(props) => props.src} />
      </span>
    </span>
  )
}

export default HoverImage;
