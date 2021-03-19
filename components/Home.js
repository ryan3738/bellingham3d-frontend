import Link from 'next/link';
import Gallery from './Gallery';
import Products from './Products';
import Grid4Styles from './styles/Grid4Styles';

export default function Home() {
  return (
    <div>
      <h2>Work with us to make your idea into a useable part</h2>
      <p>
        Have a look at our 3D printed products or get a quote for a custom
        design and print solution.
      </p>
      <br />
      <br />
      <h2>Latest Products</h2>
      <Gallery page={1} />
      <div>
        <h2>Custom Designs</h2>
        <br />
        <br />
        <Grid4Styles>
          <div>
            <h3>Design</h3>
            <p>
              Got your own 3D CAD file you would like to have printed? Have an
              idea but need help designing a 3D file to create a printable part?
              Either way we can help you have a custom part made.
            </p>
          </div>
          <div>
            <h3>Print</h3>
            <p>
              We take care in printing each part to make sure it functions as
              intended.
            </p>
          </div>
          <div>
            <h3>Ship</h3>
            We will ship your 3D printed parts to you once the printing process
            is complete.
          </div>
        </Grid4Styles>
      </div>
      <br />
      <br />

      <style jsx>{`
        ul {
          padding-left: calc(2 * var(--spacing));
        }
      `}</style>
    </div>
  );
}
