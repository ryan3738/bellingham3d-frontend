// import utilStyles from '../styles/utils.module.css'
import Image from 'next/image';
import Social from './Social';
import { siteData } from '../public/site-data';
import { instagramUrl, facebookUrl } from '../config';
import contactHeroImage from '../public/images/cad-screenshot.jpg';

export default function Contact() {
  return (
    <>
      <Image
        src={contactHeroImage}
        alt="Screenshot of a computer monitor with 3D CAD model"
        width={1100}
        height={500}
        quality={60}
        placeholder="blur"
        objectFit="cover"
      />

      <h2>Contact Us</h2>
      <div id="contact-info">
        <h3>
          For questions about custom design work or custom prints please email
          us at
        </h3>
        <br />
        <div>
          <a href={`mailto: ${siteData.email}`}>{siteData.email}</a>
        </div>
        <br />
      </div>

      <div className="social-media-container">
        <div className="social-media-contents">
          <Social
            href={instagramUrl}
            img="/images/instagram-logo.png"
            alt="instagram"
            color="--color-instagram"
          />
          {/* Add back in once facebook page is made */}
          {/* <Social
            href={facebookUrl}
            img="/images/facebook-logo.png"
            alt="facebook"
            color="--color-facebook"
          /> */}
        </div>
      </div>

      <style jsx>{`
        .social-media-container {
          display: flex;
          flex-direction: column;
          margin-top: var(--spacing);
        }
        .social-media-contents {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
