import NextImage from "next/image"

// default Image component with a loader
const Image = (props) => {
  return (
    <NextImage
      {...props}
      loader={(opts) => opts.src}
    />
  )
}

export default Image
