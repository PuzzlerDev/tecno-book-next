import Image from 'next/image';
import {API_URL} from "../config";

function StyledImage({src,alt,layout}){
    return(
        <Image
            alt={alt}
            layout={layout}
            src={API_URL + src}
            width="1920"
            height="1080"
        />
    )
}

export default StyledImage;