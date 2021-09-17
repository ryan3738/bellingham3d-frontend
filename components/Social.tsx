import Image from 'next/image';
import { siteData } from '../public/site-data';

const SocialSite = (socialSite): { getAttributes: any } => {
  type Attributes = {
    img: string;
    alt: string;
    color: string;
  };

  const getAttributes = (): Attributes => {
    let attributes = {
      img: siteData.placeholderImage.small.src,
      alt: 'Social Link',
      color: 'var(--lightGrey)',
    };
    if (socialSite === 'instagram') {
      attributes = {
        img: '/images/instagram-logo.png',
        alt: 'Instagram',
        color: '#e4405f',
      };
    }
    if (socialSite === 'facebook') {
      attributes = {
        img: '/images/instagram-logo.png',
        alt: 'Facebook',
        color: '#3b5998',
      };
    }
    if (socialSite === 'twitter') {
      attributes = {
        img: '/images/instagram-logo.png',
        alt: 'Facebook',
        color: '#1da1f2',
      };
    }
    return attributes;
  };

  return { getAttributes };
};

type AppProps = {
  href: string;
  socialSite?: string;
};

export default function Social({ href, socialSite }: AppProps): JSX.Element {
  const { img, alt, color } = SocialSite(socialSite).getAttributes();
  return (
    <div className="social">
      <a href={href} target="_blank" rel="noreferrer noopener">
        <Image
          // style='max-width:100%; max-height: auto;'
          src={img}
          alt={alt}
          layout="fixed"
          objectFit="cover"
          height="45"
          width="45"
          quality="100"
        />
      </a>
      <style jsx>{`
        .social {
          width: 45px;
          height: 45px;
          vertical-align: center;
          background-color: var(--lightBlue);
          border-radius: 5px;
          grid-column: 1/2;
          margin: 5px;
        }
        .social:hover {
          animation-name: social-button;
          animation-duration: 500ms;
          background-color: ${color};
        }
      `}</style>
    </div>
  );
}
