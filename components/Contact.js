// import utilStyles from '../styles/utils.module.css'
import Social from './social';
import Button from './button';
import siteData from '../public/data/site-data.json';

export default function Contact() {
  return (
    <>
      {/* <div className='contact-header'> */}
      {/* <h3 className={utilStyles.lightText}>CONTACT US</h3> */}
      {/* </div> */}
      <div className="contact-content">
        <div id="contact-info">
          <h2>LOCATION</h2>
          <p>
            <span className="medium-emphasis">
              {`${siteData.address.street} ${siteData.address.street2}`}
              <br />
              {`${siteData.address.city}, ${siteData.address.state} ${siteData.address.zipCode}`}
              <br />
              <br />
              <a href="tel:13601234567">{siteData.phoneNumber}</a>
              <br />
              <br />
              <b>
                <a
                  href={siteData.address.directions}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Get Directions
                </a>
              </b>
            </span>
          </p>
        </div>

        <div className="social-media-container">
          <h3>Sign up for our newsletter to receive updates</h3>
          <Button
            buttonText="SIGN UP"
            buttonLink="https://squareup.com/outreach/sgPDT7/subscribe"
          />
          <br />
          <br />
          <p>We respect your privacy</p>
          <h3>For specials and event info follow us on social media</h3>
          <div className="social-media-contents">
            <Social
              href="https://www.instagram.com/frasersgourmethideaway/"
              img="/images/instagram-logo.png"
              alt="frasers instagram"
              color="--color-instagram"
            />
            <Social
              href="http://facebook.com/frasersgh"
              img="/images/facebook-logo.png"
              alt="frasers facebook"
              color="--color-facebook"
            />
          </div>
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

        .contact-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem;
        }
        .social-media-container {
          display: flex;
          flex-direction: column;
          /* justify-content: flex-start; */
          /* align-items: flex-start; */
          margin: 10px;
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
