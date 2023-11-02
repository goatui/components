
export const layout = 'default.jsx';

export const layoutCssFiles = ['/styles/component.layout.css'];
export default ({title, children, site_data, root}) => (  <>
<div class='sidenav m-hide'>

  <div class='sidenav-components'>

    <goat-tree-view value={title} selected-node={title}>
      <goat-tree-node label="Overview" href='/components'></goat-tree-node>
      {
        site_data.componentsDetails.categories.map((category) => {
          if (!category.hide) {
            return <goat-tree-node label={category.name}>
              {
                category.components.map((component) => {
                  if (component.metadata.name) {
                    return <goat-tree-node label={component.metadata.name} href={`/components/${component.tag.replace('goat-', '')}`}></goat-tree-node>
                  }
                })
              }
            </goat-tree-node>
          }
        })
      }
      {/*{% for category in site.data.componentsDetails.categories %}
      {% if category.hide == false %}
      <goat-tree-node label="{{category.name}}">

        {% for component in category.components %}
        {% if component.metadata.name %}
        <goat-tree-node label="{{component.metadata.name}}" href='/components/{{component.tag | replace: "goat-", ""}}'></goat-tree-node>
        {% endif %}
        {% endfor %}

      </goat-tree-node>
      {% endif %}
      {% endfor %}*/}

    </goat-tree-view>

  </div>

</div>
<div class='main-content'>
  <div class='page-container'>

    <goat-breadcrumb>
      <goat-breadcrumb-item href="/">Home</goat-breadcrumb-item>
      {title != "Overview" ? <goat-breadcrumb-item href="/components">Overview</goat-breadcrumb-item> : ''}

      <goat-breadcrumb-item active>{title}</goat-breadcrumb-item>
    </goat-breadcrumb>

    <goat-text type='heading' heading-size='6'>{title}</goat-text>


    {children}

    <div class='comments-section'>
      <div id='disqus_thread'></div>
      <script type="text/javascript" async="true" src="//goatui.disqus.com/embed.js"></script>
      <noscript>Please enable JavaScript to view the <a href='https://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>
    </div>
  </div>

  <div class='footer container'>
    <goat-divider></goat-divider>
    <goat-text type='legal' expressive>
      &copy; 2021 <goat-link href='https://shivajivarma.com'>Shivaji Varma</goat-link>. All Rights Reserved.
    </goat-text>
  </div>
</div>
</>
);

