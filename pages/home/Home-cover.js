import Image from 'next/image';
import Link from 'next/link';

function HomeCover({cover}){
    const {coverTitle,coverBody,coverLink,coverPicture} = cover;
    return(
        <section>
            
            <article className="container py-5">
                <div className="row justify-content-beetwen">
                    <div className="col-12 col-lg-4 text-center text-lg-start">
                        <h1>
                            {coverTitle}
                        </h1>
                        <p className="my-4">
                            {coverBody}
                        </p>
                        <Link href={coverLink.linkUrl}>{coverLink.linkTitle}</Link>
                        
                    </div>    
                    <div className="col-12 col-lg-7 py-4">
                        <Image 
                            src={coverPicture.url} 
                            alt={coverPicture.alternativeText}
                            layout="fill"
                        />
                    </div>
                </div>
            </article>
            
        </section>
    );
    }

export default HomeCover;