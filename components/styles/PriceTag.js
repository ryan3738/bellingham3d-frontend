import styled from 'styled-components';

const PriceTag = styled.span`
  --notchSize: 7.5px;
  /* clip-path:
    polygon(
      0% 20px,                 top left
      20px 0%,                 top left
      calc(100% - 20px) 0%,    top right
      100% 20px,               top right
      100% calc(100% - 20px),  bottom right
      calc(100% - 20px) 100%,  bottom right
      20px 100%,               bottom left
      0 calc(100% - 20px)      bottom left
    ); */
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    100% 0%,
    100% var(--notchSize),
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    var(--notchSize) 100%,
    0% 100%
  );
  background: var(--red);

  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: -3px;
  right: -3px;
`;

export default PriceTag;
