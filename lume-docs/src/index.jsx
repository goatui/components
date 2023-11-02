export const root = true;

export const cssFiles = ['/styles/index.css'];
export const layout = 'default.jsx';

export default ({site_data, comp}) => (
  <>
    <div class='banner'>
      <div class='banner-content'>
        {comp.IndexBanner()}

        <goat-text type='heading' heading-size='7' class='title'>
          {site_data.title}
        </goat-text>
        <goat-text type='heading' heading-size='3'>
          {site_data.tagline}
        </goat-text>
        <goat-text type='heading' heading-size='3'>
          Hooray! we are now v1.0 🎉
        </goat-text>
        <div style={{display: 'flex', gap: '1rem'}}>
          <goat-button href='#getting-started' size='lg' color='dark' icon='arrow--right'>
            Get Started
          </goat-button>
          <goat-button href='/components' size='lg' color='brand-primary' kind='simple'>
            Browse Components
          </goat-button>
        </div>
      </div>
    </div>

    <div class='sections-wrapper'>
      <goat-container class='section'>
        <goat-text type='heading' heading-size='5'>
          Introduction
        </goat-text>
        <goat-text expressive>
          {site_data.title} contains most used web components built using Stencil. So you don't need to include any
          additional framework dependencies, You can simply import required
          component js, and right away start using it.
        </goat-text>
        <goat-text expressive>Can easily be consumed by any other framework, like Vue, React, Angular, etc.</goat-text>
      </goat-container>

      <goat-container class='section'>
        <goat-text type='heading' heading-size='5'>
          About
        </goat-text>
        <goat-text expressive>
          {site_data.title} components are beautiful Open Source web components under MIT license. They are maintained
          by
          <goat-link href='https://shivajivarma.com'>Shivaji Varma</goat-link>. Do not miss any updates and
          announcements, stay tuned on our social pages. You can contribute to the
          project by creating pull requests or issues.
        </goat-text>
      </goat-container>

      <div class='section'>
        <goat-container>
          <goat-text type='heading' heading-size='5' id='getting-started'>
            Getting Started
          </goat-text>
          <ul style={{paddingInlineStart: '1.5rem'}}>
            <li>
              <goat-text expressive=''>
                Put a script tag similar to this
                <goat-text expressive type='code' inline>
                  &lt;script type="module" src="{site_data.script}"&gt;&lt;/script&gt;
                </goat-text>&nbsp;
                in the head of your index.html
              </goat-text>
            </li>
            <li>
              <goat-text expressive>Then you can use the element anywhere in your template, JSX, html etc</goat-text>
            </li>
          </ul>
        </goat-container>
        <goat-container class='container-code'>
          <goat-code-highlighter language='html' id='get-started-code' class='code-highlighter'>
            <pre><code>{`<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width'>
  <title>${site_data.title}</title>

  <!-- include your custom theme variable values, view variable names at ${site_data.themeCss} -->
  <!--link rel="stylesheet" href="/custom-theme.css"></link-->
   &lt;script type='module' src='${site_data.script}'>&lt;/script>

      <style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap');
    :root {
      --font-family-base: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    }
  </style>
</head>
<body>

  <goat-button size='lg' color='primary'>Click me</goat-button>

</body>
</html>`}</code></pre>
          </goat-code-highlighter>

        </goat-container>
      </div>

      <div class='sections'>
        <goat-container>
          <goat-button href='/components' size='lg' kind='block' icon='arrow--right'>
            Browse Components
          </goat-button>
        </goat-container>
      </div>
    </div>

    <div class='social-icons'>
      <goat-button
        icon='logo--github'
        icon-size='lg'
        variant='ghost'
        color='secondary'
        target='_blank'
        aria-label='Github'
        href={`https://www.github.com/${site_data.github_username}`}
      ></goat-button>
      <goat-button
        icon-size='lg'
        icon='logo--twitter'
        color='secondary'
        variant='ghost'
        target='_blank'
        aria-label='Twitter'
        href={`https://www.twitter.com/${site_data.twitter_username}`}
      ></goat-button>
    </div>

    <div class='made-in-india'>
      <span>
        &copy; 2023
        <goat-link class='no-decoration' href={site_data.author_url}>
          {site_data.author}
        </goat-link>
        .
      </span>
      <goat-svg class='country-flag' size='1.5rem'
                src='https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/in.svg'></goat-svg>
      Made in India.
    </div>

    <script
      src='https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js'
      integrity='sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=='
      crossOrigin='anonymous'
      referrerpolicy='no-referrer'
    ></script>
    <script src='/assets/js/index.js'></script>
  </>
);
