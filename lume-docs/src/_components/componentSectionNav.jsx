export default ({sections}) => {
  return <div class="section-nav">

    <goat-menu class="js-scroll-nav">
      {sections.map((section) => (
        <goat-menu-item>
          <goat-link class="link no-style"
                     href={`#section-${section.title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-")}`}>{section.title}</goat-link>
        </goat-menu-item>
      ))
      }
    </goat-menu>


    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3120721550776061"
            crossOrigin="anonymous"></script>

    <ins class="adsbygoogle"
         data-ad-client="ca-pub-3120721550776061"
         data-ad-slot="1398164690"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>
}
