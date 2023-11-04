import usage from "./usage.jsx";

const sections = [
  {
    "title": "Usage",
    "render": usage
  },
  {
    "title": "Multiple",
    "render": () => (<div class="component-section"></div>)
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
            {section.render({comp})}
          </div>))
      }

    </div>

    {comp.ComponentSectionNav({sections})}
  </div>);
