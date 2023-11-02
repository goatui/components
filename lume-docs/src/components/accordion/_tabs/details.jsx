const sections = [
  {
    "title": "Usage",
    "source": "sections/usage.html"
  },
  {
    "title": "Multiple",
    "source": "sections/multiple.html"
  }
];

export default ({title, description, site_data, comp}) => (
  <div class="usage-tab">

    <div class="component-content">
      <div class="component-description">
        <goat-text type="body" expressive>{description}</goat-text>
      </div>

      {
        sections.map((section) => (
          <div id={`section-${section.title.toLowerCase().replace(" ", "-").replace("/", "-")}`}
               class="component-section">
            <goat-text type="heading" heading-size="4">{section.title}</goat-text>
            {/* {% include_relative {{section.source}} %}*/}
          </div>))
      }

    </div>

    {comp.ComponentSectionNav({sections})}
  </div>);
