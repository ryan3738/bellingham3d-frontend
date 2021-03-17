import { SRLWrapper, useLightbox } from 'simple-react-lightbox';

export default function ImageLightBox({ children }) {
  return (
    <>
      <SRLWrapper
        options={{
          buttons: {
            showAutoplayButton: false,
            showDownloadButton: false,
            showFullscreenButton: true,
            showThumbnailsButton: false,
          },
        }}
      >
        {children}
        {/* <div className="photo-grid">
          <div className="image">
            <img
              src=""
              alt="Duck & Pheasant Pate | blackberry mustard, pickled vegetables, tapioca ink chips"
              loading="lazy"
            />
          </div>
        </div> */}
      </SRLWrapper>
      <style jsx>{`
        .photo-grid {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 360px));
          grid-auto-rows: 50vh;
          margin: 10px;
          justify-content: center;
        }
        .image > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .image > img:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}
