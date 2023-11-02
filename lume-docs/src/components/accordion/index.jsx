import ReactHtmlParser from 'npm:html-react-parser';
import detailsTab from './_tabs/details.jsx';

export const title = 'Accordion';

export const description = 'An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.';
export const cssFiles = []
export const layout = 'component.jsx';

/*---
layout: component
title: Accordion
description:
sections:
  - title: Usage
    source: sections/usage.html
  - title: Multiple
    source: sections/multiple.html
---*/
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
