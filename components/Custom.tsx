import Image from 'next/image';
import Head from 'next/head';
import Contact from './Contact';
// import Gallery from './Gallery';
import Grid4Styles, { GridBox, ImageWrapper } from './styles/Grid4Styles';
import customHeroImage from '../public/images/laptop-parts-printer.jpg';
import { siteData } from '../public/site-data';

export default function Custom(): JSX.Element {
  return (
    <>
      <Head>
        <title>Custom | {siteData.businessName}</title>
      </Head>
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
        <GridBox>
          <ImageWrapper>
            <Image
              src="/images/3d-modeling.png"
              alt="Icon of computer with cad modeling"
              loading="lazy"
              height="175"
              width="175"
            />
          </ImageWrapper>
          <h3>Design</h3>
          <span>
            If have your own 3D CAD file or an idea but need help designing a
            printable part. We can help you design and make a custom part.
          </span>
        </GridBox>
        <GridBox>
          <ImageWrapper>
            <Image
              src="/images/3d-printer.png"
              alt="Icon of 3D printer"
              loading="lazy"
              height="175"
              width="175"
            />
          </ImageWrapper>
          <h3>Print</h3>
          <span>
            We take care when printing each part to make sure it functions as
            intended.
          </span>
        </GridBox>
        <GridBox>
          <ImageWrapper>
            <Image
              src="/images/delivery-truck.png"
              alt="Icon of delivery truck"
              loading="lazy"
              height="175"
              width="175"
            />
          </ImageWrapper>
          <h3>Ship</h3>

          <span>
            We will ship your 3D printed parts to you once the printing process
            is complete.
          </span>
        </GridBox>
      </Grid4Styles>
      <div className="gridSpacer" />
      <br />
      <br />
      <Contact />
      <style jsx>{`
        .gridSpacer {
          width: 100%;
          height: 4rem;
        }
        ul {
          padding-left: calc(2 * var(--spacing));
        }
        li {
          margin: var(--spacing) 0;
        }
      `}</style>
    </>
  );
}
