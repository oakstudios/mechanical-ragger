import Image from "../components/Image"

const HoverImage = ({ src, alt, children }) => {
  return (
    <figure className="HoverImage">
      <figcaption className="hover-title">{children}</figcaption>
      <div className="hover-image">
        <Image src={src} alt={alt} loader={(props) => props.src} />
      </div>
    </figure>
  )
}

export default HoverImage;
