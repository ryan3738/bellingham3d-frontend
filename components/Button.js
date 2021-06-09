import Link from 'next/link';
import { ButtonStyles } from './styles/StateStyles';

export default function Button({
  children,
  button,
  buttonLink,
  internalLink,
  onClick,
  disabled,
  title,
}) {
  return (
    <>
      {buttonLink && (
        <a href={buttonLink}>
          <ButtonStyles
            type="button"
            title={title}
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
            title={title}
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
          title={title}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </ButtonStyles>
      )}

      <style jsx>{`
         {
        }
      `}</style>
    </>
  );
}
