import styled from 'styled-components';
import portalStyle from './portalStyle.js';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376
}

// Iterate through the sizes and create a media template
// const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${sizes[label] / 16}em) {
//       ${css(...args)}
//     }
//   `
//   return acc
// }, {})

export const PortalButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  border: 1px solid;
  ${'' /* default first */}
  color: ${portalStyle.buttonNeutralColor};
  color: ${props => props.yes && portalStyle.buttonYesColor};
  color: ${props => props.no && portalStyle.buttonNoColor};
  color: ${props => props.maybe && portalStyle.buttonMaybeColor};
  color: ${props => props.default && portalStyle.buttonNeutralColor};
`;
//
// const theme = {
//   portalButton: {
//     yes: portalStyle.buttonYesColor,
//     no: portalStyle.buttonNoColor,
//     maybe: portalStyle.buttonMaybeColor,
//     neutral: portalStyle.buttonNoColor,
//   },
// };
