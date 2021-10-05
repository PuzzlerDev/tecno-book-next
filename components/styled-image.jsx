import Image from "next/image";
import { DOMAIN_URL } from "../helpers/constants"

const Loader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const StyledImage = ({ src, alt, height, width, loading, priority }) => {
  return (
    <div>
      <Image
        priority={priority}
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
  loading: 'lazy',
  priority: false,
};

export default StyledImage;
