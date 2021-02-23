import Link from 'next/link';
import Grid4Styles from './styles/Grid4Styles';

export default function Home() {
  return (
    <div>
      <h2>This is the home page</h2>
      <p>
        <strong>Bellingham 3D</strong> is a 3D printing and design company based
        in Bellingham, Washington.
      </p>
      <Grid4Styles>
        <div>
          <h3>We offer predesigned products and custom solutions including:</h3>
          <ul>
            <li>Wood Working Jigs</li>
            <li>Snowbaording & Skiing Jigs</li>
            <li>3D Printin accessories</li>
            <li>Lighting Fixtures</li>
            <Link href="/products">See Our Products</Link>
          </ul>
        </div>
        <div>
          <h3>Our capabilities & services include:</h3>
          <ul>
            <li>Ultimaker 3D Printer</li>
            <li>2 Filament Prints</li>
            <li>Dissolvable Support Structures</li>
            <li>Engineering & Design</li>
            <li>CAD 3D Modelling</li>
            Contact us now with your project details! (link to contact info)
          </ul>
        </div>
        <div>
          <h3>Our capabilities & services include:</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, repellat sit neque quod, ex consequuntur quaerat
          maxime natus itaque, minus ullam earum vel distinctio cupiditate? Quas
          perspiciatis sit ratione quis.
        </div>
        <div>
          <h3>Our capabilities & services include:</h3>Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Voluptatibus, iste cumque minus
          vitae laborum illum! Quos vitae ut nemo reprehenderit fugit, animi
          laudantium consequatur, modi in amet, voluptatum magni? Sequi!
        </div>
        <div>
          <h3>Our capabilities & services include:</h3>Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Animi aperiam omnis, eum, quo
          porro suscipit odio dignissimos minima et perspiciatis ratione quidem
          praesentium inventore. Similique reiciendis dolorem assumenda
          reprehenderit adipisci!
        </div>
      </Grid4Styles>
    </div>
  );
}
