import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html {
  font-size: 16px;
  color: #f3f3f3;
  min-height: 100%;
  
}

 body {

  height: 100%;
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
    background-color: #5661b3;
    color: #f3f3f3;
    font-family: "-apple-system","system-ui","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial",sans-serif;
}

h1 {
  font-weight: 700;
  font-size: 1.3rem;
  color: #f3f3f3;
}

h3 {
  font-size: 1.2rem;
}

.container {
  margin-top: 100px;
  padding: 3rem;
}

form {
  font-size: 0.8rem;
}
`;

export { GlobalStyle };
