import Link from 'next/link';
import { ButtonStyles } from './styles/StateStyles';

type AppProps = {
  children?: React.ReactNode;
  button?: boolean;
  buttonLink?: string;
  internalLink?: string;
  onClick?: any;
  disabled?: boolean;
  title?: string;
};

export default function Button({
  children,
  button,
  buttonLink,
  internalLink,
  onClick,
  disabled,
  title,
}: AppProps): JSX.Element {
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
        <Link href={internalLink} passHref>
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
    </>
  );
}
