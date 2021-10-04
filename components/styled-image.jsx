import Image from "next/image";

const Loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const StyledImage = ({ src, alt, height, width }) => {
  return (
    <div>
      <Image
        loader={Loader}
        alt={alt}
        src={src}
        quality={100}
        layout="responsive"
        width={width}
        height={height}
      />
    </div>
  );
};

StyledImage.defaultProps = {
  width: 400,
  height: 300,
};

export default StyledImage;
