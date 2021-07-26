import Head from 'next/head';
import Image from 'next/image';
import aboutHeroImage from '../public/images/ultimaker-closeup.jpg';
import { siteData } from '../public/site-data';

export default function About() {
  return (
    <>
      <Head>
        <title>About | {siteData.businessName}</title>
      </Head>
      <Image
        src={aboutHeroImage}
        alt="Ultimaker 3D printer closeup image"
        width={1100}
        height={500}
        quality={60}
        priority
        placeholder="blur"
        objectFit="cover"
      />
      <br />
      <div>
        <h2>DESIGNED AND PRINTED IN THE PNW</h2>
        <p>
          Bellingham 3D is a 3D printing and design company based in Bellingham,
          Washington. From design to manufacturing, all of our products are made
          at our shop in Bellingham, WA. We are able to make new products
          regularly and work quickly with customers to turn-around custom parts
          in just a couple weeks.
        </p>
      </div>
    </>
  );
}
