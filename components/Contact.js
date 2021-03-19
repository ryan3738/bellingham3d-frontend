// import utilStyles from '../styles/utils.module.css'
import Social from './Social';
import Button from './Button';
import { siteData } from '../public/site-data';

export default function Contact() {
  return (
    <>
      <h2>Contact Us</h2>
      <div id="contact-info">
        <br />
        <h3>
          For questions about custom design work or custom prints please email
          us at
        </h3>
        <br />
        <div>
          <a href={`mailto: ${siteData.email}`}>{siteData.email}</a>
        </div>
        <br />
        {/* <p>
          <span className="medium-emphasis">
            {`${siteData.address.street} ${siteData.address.street2}`}
            <br />
            {`${siteData.address.city}, ${siteData.address.state} ${siteData.address.zipCode}`}
            <br />
            <br />
            <a href="tel:13601234567">{siteData.phoneNumber}</a> */}
        {/* <br />
            <br /> */}
        {/* <b>
              <a
                href={siteData.address.directions}
                target="_blank"
                rel="noreferrer noopener"
              >
                Get Directions
              </a>
            </b> */}
        {/* </span> */}
        {/* </p> */}
      </div>

      <div className="social-media-container">
        {/* <h3>Sign up for our newsletter to receive updates</h3>
        <Button buttonText="SIGN UP" buttonLink="" />
        <br />
        <br />
        <p>We respect your privacy</p> */}
        {/* <h3>For new product updates follow us on social media</h3> */}
        <div className="social-media-contents">
          <Social
            href="https://www.instagram.com/"
            img="/images/instagram-logo.png"
            alt="instagram"
            color="--color-instagram"
          />
          <Social
            href="http://facebook.com/"
            img="/images/facebook-logo.png"
            alt="facebook"
            color="--color-facebook"
          />
        </div>
      </div>

      <style jsx>{`
        /* .contact-container {
          display: flex;
          flex-direction: column;
        } */
        /* .contact-header {
          padding: 3rem 0 0;
        } */

        .social-media-container {
          display: flex;
          flex-direction: column;
          /* justify-content: flex-start; */
          /* align-items: flex-start; */
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
