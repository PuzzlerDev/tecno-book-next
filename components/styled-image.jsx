import Image from "next/image";

const Loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const StyledImage = ({ src, alt, height, width, loading }) => {
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
        loading={loading}
      />
    </div>
  );
};

StyledImage.defaultProps = {
  width: 400,
  height: 300,
  loading: 'lazy'
};

export default StyledImage;
