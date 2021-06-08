import Link from 'next/link';
import ButtonStyles from './styles/ButtonStyles';

export default function Button({
  children,
  button,
  buttonLink,
  internalLink,
  onClick,
  disabled,
}) {
  return (
    <>
      {buttonLink && (
        <a href={buttonLink}>
          <ButtonStyles
            type="button"
            className="button-styles"
            disabled={disabled}
            onClick={onClick}
          >
            {children}
          </ButtonStyles>
        </a>
      )}
      {internalLink && (
        <Link href={internalLink}>
          <ButtonStyles
            type="button"
            className="button-styles"
            disabled={disabled}
            onClick={onClick}
          >
            {children}
          </ButtonStyles>
        </Link>
      )}
      {button && (
        <ButtonStyles
          type="button"
          className="button-styles"
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </ButtonStyles>
      )}

      <style jsx>{`
        .button-styles {
          padding: 5px;
          margin: var(--spacing) calc(var(--spacing) / 2);
          min-height: 44px;
          min-width: 72px;
        }

        .button-styles:hover {
          animation-name: background-color;
          animation-duration: 500ms;
          opacity: 0.65;
        }
      `}</style>
    </>
  );
}
