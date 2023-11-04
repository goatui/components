import ReactHtmlParser from 'npm:html-react-parser';

export const title = 'Accordion';

export const description = 'An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.';
export const layout = 'component.jsx';


const detailsTab = ( {comp}) => (
  <comp.HighlighterCard>
    <goat-accordion>
      <goat-accordion-item heading="Title 1" disabled="false">
        <goat-text>
          The accordion component delivers large amounts of content in a small space through progressive disclosure.
          The user gets key details about the underlying content and can choose to expand that content within the
          constraints of the accordion.
          Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.
        </goat-text>
      </goat-accordion-item>
      <goat-accordion-item heading="Title 2" disabled="false">
        <goat-text>
          The accordion component delivers large amounts of content in a small space through progressive disclosure.
          The user gets key details about the underlying content and can choose to expand that content within the
          constraints of the accordion.
          Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.
        </goat-text>
      </goat-accordion-item>
      <goat-accordion-item heading="Title Disabled" disabled="true">
        <goat-text>
          The accordion component delivers large amounts of content in a small space through progressive disclosure.
          The user gets key details about the underlying content and can choose to expand that content within the
          constraints of the accordion.
          Accordions work especially well on mobile interfaces or whenever vertical space is at a premium.
        </goat-text>
      </goat-accordion-item>
    </goat-accordion>
  </comp.HighlighterCard>

)


export default ({title, description, site_data, comp}) => (

  <goat-tabs class='page-tabs'>
    <goat-tabs-list>
      <goat-tab selected="true">Details</goat-tab>
      <goat-tab>Playground</goat-tab>
    </goat-tabs-list>
    <goat-tab-panel>
      {detailsTab({title, description, site_data, comp})}
    </goat-tab-panel>
  </goat-tabs>
);
