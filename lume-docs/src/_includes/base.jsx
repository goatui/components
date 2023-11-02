import ReactHtmlParser from 'npm:html-react-parser';

export default ({title, children, site_data, cssFiles, layoutCssFiles}) => (
  <html>
  <head>
    {/* Title */}
    <title>{title ? ReactHtmlParser(`${title}  &middot; ${site_data.title}`) : ReactHtmlParser(`${site_data.title} &middot; ${site_data.tagline}`)}</title>

    {/* Required Meta Tags Always Come First */}
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    {/* Author */}
    <meta name="author" content={site_data.author}/>
    <meta name="copyright" content={`(c)  ${new Date().getFullYear()} ${site_data.author}`}/>

    {/* Favicon */}
    <link rel="shortcut icon" href="/assets/img/favicon.svg"/>

    {/* CSS Implementing Plugins */}
    <link rel="stylesheet" href={site_data.themeCss}/>
    <link rel="stylesheet" href="/styles/main.css"/>

    {cssFiles ? cssFiles.map(file => {
      return <link rel="stylesheet" type="text/css" media="screen" href={file}/>;
    }) : ''}

    {layoutCssFiles ? layoutCssFiles.map(file => {
      return <link rel="stylesheet" type="text/css" media="screen" href={file}/>;
    }) : ''}


    <script type="module" src={site_data.script}></script>
  </head>
  <body itemscope itemtype="http://schema.org/WebPage">
  {children}

  {/* JS Implementing Plugins */}
  <script src="/assets/js/main.js"></script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-YVVYZC1HFF"></script>
  </body>
  </html>
);
