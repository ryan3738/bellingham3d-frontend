import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <p>
        <h2>Bellingham 3D</h2> is a 3D printing and design company based in
        Bellingham, Washington.
        <h3>We offer predesigned products and custom solutions including:</h3>
        <ul>
          <li>Wood Working Jigs</li>
          <li>Snowbaording & Skiing Jigs</li>
          <li>3D Printin accessories</li>
          <li>Lighting Fixtures</li>
          <Link href="/products">See Our Products</Link>
        </ul>
        <h3>Our capabilities & services include:</h3>
        <ul>
          <li>Ultimaker 3D Printer</li>
          <li>2 Filament Prints</li>
          <li>Dissolvable Support Structures</li>
          <li>Engineering & Design</li>
          <li>CAD 3D Modelling</li>
          Contact us now with your project details! (link to contact info)
        </ul>
      </p>
    </div>
  );
}
