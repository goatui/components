import ReactHtmlParser from 'npm:html-react-parser';

export const title = 'Overview';

export const cssFiles = ['/styles/components.css'];
export const layout = 'component.jsx';


const renderCard = (component) => (<div class='card-wrapper'>
      <goat-card shadow-level='md' class='card'>
        <goat-card-content class='header card-header' data-tag={component.tag}>
          {
            component.metadata.example
              ? ReactHtmlParser(component.metadata.example)
              : <goat-image src={component.metadata.img} dark-src={component.metadata.imgDark}/>
          }
        </goat-card-content>

        <goat-card-content class='body'>
          <goat-text class='text' type='heading' heading-size='3'>{component.metadata.name}&nbsp;
            <goat-link href={`/components/?filter=${component.metadata.category}`}>
              <goat-tag class='color-blue'
                        tag={component.metadata.category}>{component.metadata.category}</goat-tag>
            </goat-link>
          </goat-text>
          <goat-text class='text'>{component.metadata.description}</goat-text>
        </goat-card-content>
      </goat-card>
    </div>);

export default ({site_data, componentsDetails}) => (
  <>
    <goat-input id='component-search' placeholder='Search'>
      <goat-icon slot='start' size='1rem' name='search'></goat-icon>
    </goat-input>

    <div class='filters hidden'>
      <goat-link href='/components'>
        Remove filter
      </goat-link>
    </div>


    <div class='cards'>
      {
        componentsDetails.components.map((component) => {
          if (component.metadata.name && component.metadata.category != 'Up coming') {
            return renderCard(component);
          }
        })
      }
    </div>


    <goat-text class='up-coming-title' type='heading' heading-size='4'>Upcoming</goat-text>

    <div class='cards up-coming'>
      {
        componentsDetails.components.map((component) => {
          if (component.metadata.name && component.metadata.category == 'Up coming') {
            return renderCard(component);
          }
        })
      }
    </div>

    <script src='/assets/js/components.page.js'></script>
  </>
);

