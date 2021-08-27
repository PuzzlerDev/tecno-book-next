import Image from 'next/image';

function Loader({ src, width, quality }){
    return `${src}?w=${width}&q=${quality || 75}`
  }

function StyledImage({src,alt,height,width}){
    return(
        <div>
            <Image
                loader={Loader}
                alt={alt}
                src={process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE + src}
                quality={100}
                layout="responsive"
                width={width ? width : 400}
                height={height ? height : 480}
            />

        </div>
    )
}

export default StyledImage;