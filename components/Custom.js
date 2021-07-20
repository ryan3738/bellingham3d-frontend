import Image from 'next/image';
import Contact from './Contact';
// import Gallery from './Gallery';
import Grid4Styles from './styles/Grid4Styles';
import customHeroImage from '../public/images/laptop-parts-printer.jpg';

export default function Custom() {
  return (
    <>
      <Image
        src={customHeroImage}
        alt="Screenshot of a computer monitor with 3D CAD model"
        width={1100}
        height={500}
        quality={60}
        priority
        placeholder="blur"
        objectFit="cover"
      />
      <div>
        <h2>Work with us to make your idea into a useable part</h2>
        <p>
          Have a look at our 3D printed products or get a quote for a custom
          design and print solution.
        </p>
      </div>
      <h2>Custom Designs</h2>
      <Grid4Styles>
        <div>
          <h3>Design</h3>
          <span>
            <ul>
              <li>Got your own 3D CAD file you would like to have printed?</li>
              <br />
              <li>
                Have an idea but need help designing a 3D file to create a
                printable part?
              </li>
            </ul>
            <br />
            We can help you design and make a custom part.
          </span>
        </div>
        <div>
          <h3>Print</h3>
          <p>
            We take care when printing each part to make sure it functions as
            intended.
          </p>
        </div>
        <div>
          <h3>Ship</h3>
          We will ship your 3D printed parts to you once the printing process is
          complete.
        </div>
      </Grid4Styles>
      <br />
      <br />
      <Contact />
      <style jsx>{`
        ul {
          padding-left: calc(2 * var(--spacing));
        }
      `}</style>
    </>
  );
}
