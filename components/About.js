import Image from 'next/image';

export default function About() {
  return (
    <>
      <Image
        src="/images/ultimaker-closeup.jpg"
        alt="Ultimaker 3D printer closup image"
        width={1000}
        height={500}
        objectFit="cover"
      />
      <br />
      <img src="public/images/ultimaker-closeup.jpg" alt="" />
      <p>
        <h2>DESIGNED AND PRINTED IN THE PNW</h2> Bellingham 3D is a 3D printing
        and design company based in Bellingham, Washington. From design to
        manufacturing, all of our products are made at our shop in Bellingham,
        WA. We are able to make new products regularly and work quickly with
        customers to turn-around custom parts in just a couple weeks.
      </p>
    </>
  );
}
