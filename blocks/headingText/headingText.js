
export default function decorate(block) {
    block.classList.add('content-block-ddd');
    
    [...block.children].forEach((row) => {
     
        const heading = row.querySelector('h2, h3, h4, h5, h6');
        const description = row.querySelector('p');
        const button = row.querySelector('a, button');
        
        if (heading) {
          heading.classList.add('content-heading-ddd');
        }
        if (description) {
          description.classList.add('content-description-ddd');
        }
        if (button) {
          button.classList.add('content-button-ddd');
        }
      
    });
  }
