import { createGlobalStyle } from 'styled-components';

import ralewayRegularEot from './Raleway-Regular.eot';
import ralewayRegularSvg from './Raleway-Regular.svg';
import ralewayRegularTtf from './Raleway-Regular.ttf';
import ralewayRegularWoff from './Raleway-Regular.woff';

const GlobalFonts = createGlobalStyle`
@font-face {
    font-family: 'Raleway Regular';
    src: url(${ralewayRegularEot});
    src: local('☺'), url(${ralewayRegularWoff}) format('woff'),
      url(${ralewayRegularTtf}) format('truetype'),
      url(${ralewayRegularSvg}) format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalFonts;
