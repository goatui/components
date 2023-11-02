export const layout = 'base.jsx';
export default ({title, children, site_data, root}) => (
  <>
    <nav class='top-nav'>
      <goat-header class='brand actions-separated {% if page.root != true %}border{% endif %}'>
        <div slot='left'>
          <goat-header-brand logo='/assets/img/logo.svg' href='/#' name={site_data.title}
                             sub-title={root ? title : ''}></goat-header-brand>
        </div>


        <div slot='right'>

          {/*{% if page.root != true %}
        <goat-select id='site-search'
                     class='hide-mobile'
                     search='contains'
                     hide-dropdown-icon
                     placeholder="Type '/' for search">
          <goat-icon slot='start' name='search' size='1rem'></goat-icon>
        </goat-select>
        <script>
          document.addEventListener('DOMContentLoaded', function() {
          const search = document.querySelector('#site-search');

          // prettier-ignore
          search.items = JSON.parse(`[{% for page in site.pages %}{"label": "{{page.title}", "value": "{{page.url}"}{% if forloop.last == false %},{% endif %}{% endfor %}]`);
          search.items = search.items.filter(item => !!item.label);
          search.addEventListener('goat:change', function(e) {
          window.location.href = e.detail.value;
        });

          search.addEventListener('goat:search-enter', function(e) {
          if (e.detail.currentItems.length > 0)
          window.location.href = e.detail.currentItems[0].value;
        });

          document.addEventListener('keydown', function(e) {
          if (e.key === '/') {
          e.preventDefault();
          search.isOpen = true;
          setTimeout(() => {
          search.setFocus();
        }, 300);
        }
        });
        });
        </script>
        {% endif %}*/}

          <goat-header-action
            id='theme-switcher'
            icon="sun"
            class="theme-switcher"
            aria-title='Theme switcher'></goat-header-action>

          <goat-header-action id='dir-switcher' class='hide-tablet-landscape-below'>LTR</goat-header-action>

          <goat-header-action
            href='/blog#'>
            Blog
          </goat-header-action>

          <goat-header-action
            class='hide-tablet-portrait-below'
            href='https://opencollective.com/goat-ui-components#support'>
            Become a backer
          </goat-header-action>

          {root ?
            <goat-header-action
              icon='logo--github'
              href={`https://github.com/${site_data.github_username}/${site_data.github_project}`}
              target='_blank'
            ></goat-header-action>
            : <>
              <goat-header-action
                class='show-desktop'
                href={`https://github.com/${site_data.github_username}/${site_data.github_project}/issues`}
                target='_blank'
              >Report Issue
              </goat-header-action>

              <goat-header-action
                icon='logo--github'
                class='hide-desktop'
                href={`https://github.com/${site_data.github_username}/${site_data.github_project}/issues`}
                target='_blank'
              ></goat-header-action>
            </>}
        </div>
      </goat-header>
    </nav>

    <main>{children}</main>
  </>
);
