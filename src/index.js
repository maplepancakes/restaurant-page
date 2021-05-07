import menuPage from "./menu";
import contactPage from "./contact";

const homePage = (function()
{  
    const mainContainer = document.querySelector(`#content`);

    const center = document.createElement(`center`);

    mainContainer.appendChild(center);

    // Loads header to user display
    const loadHeader = function()
    {
        // Create elements
        const header = document.createElement(`header`);
        const h1 = document.createElement(`h1`);

        // Set attribute for created element
        h1.textContent = `Autumn Nostalgia`;

        // Append elements for user display
        center.appendChild(header);
        header.appendChild(h1);
    }

    // Loads selection tab to user display
    const loadSelectionTab = function()
    {
        const numberOfTabs = 3;  // Number of tabs to generate

        let tabSelectionArray = [];
        let tabLabelArray = [];

        // Create elements
        const tabBox = document.createElement(`div`);

        for (let i = 0; i < numberOfTabs; i++)
        {
            tabSelectionArray[i] = document.createElement(`div`);

            tabLabelArray[i] = document.createElement(`label`);
        }

        // Set attributes for created elements
        tabBox.setAttribute(`id`, `tab-box`);

        for (let i = 0; i < numberOfTabs; i++)
        {
            tabSelectionArray[i].classList.add(`tab-selection`);

            tabLabelArray[i].classList.add(`tab-label`);
            tabLabelArray[i].setAttribute(`id`, `tab-label-${i}`);
        }

        tabLabelArray[0].textContent = `HOME`;
        tabLabelArray[1].textContent = `MENU`;
        tabLabelArray[2].textContent = `CONTACT`;

        // Append elements for user display
        center.appendChild(tabBox);

        for (let i = 0; i < numberOfTabs; i++)
        {
            tabBox.appendChild(tabSelectionArray[i]);
            tabSelectionArray[i].appendChild(tabLabelArray[i]);
        }
    }

    // Loads `Who are we?` section to user display
    const loadAboutSection = function()
    {
        // Create elements
        const aboutBox = document.createElement(`div`);
        const containerHeader = document.createElement(`h2`);
        const labelDescription = document.createElement(`label`);

        // Set attributes for created elements
        aboutBox.classList.add(`description-box`);
        aboutBox.setAttribute(`id`, `about-box`);

        containerHeader.classList.add(`container-header`);
        containerHeader.textContent = `Who are we?`;

        labelDescription.classList.add(`label-description`);
        labelDescription.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus viverra, tristique ex nec, vehicula dolor. Cras egestas, ligula et posuere efficitur, mauris sapien pharetra magna, ornare viverra eros lacus ac magna. Curabitur semper erat aliquam augue luctus finibus. Maecenas ac consequat diam. Proin in scelerisque arcu. Integer id imperdiet justo, at blandit sem. Etiam cursus mauris sollicitudin, euismod sem et, sollicitudin risus. Mauris accumsan odio sed neque fringilla sollicitudin ut in massa. Vivamus aliquet massa risus, in rhoncus nisl maximus vitae. Aliquam sem nulla, mattis id imperdiet ac, porttitor vitae nisl. In ut dolor ac odio blandit dignissim vitae non est. Sed vitae enim non est finibus pretium. Ut at nunc vitae nunc aliquam tempor ac a nunc.`;
        
        // Append elements for user display
        center.appendChild(aboutBox);
        aboutBox.appendChild(containerHeader);
        aboutBox.appendChild(labelDescription);
    }

    // Loads `Testimonial` section to user display
    const loadTestimonialSection = function()
    {
        const numberOfContainers = 3; // Number of testimonial containers to generate
        const NUMBER_OF_SEPARATORS = numberOfContainers - 1; // Number of separators (DO NOT MODIFY)

        let labelDescriptionArray = [];
        let testimonialNameArray = [];
        let separatorArray = [];
        
        // Create elements
        const testimonialBox = document.createElement(`div`);
        const containerHeader = document.createElement(`h2`);

        for (let i = 0; i < numberOfContainers; i++)
        {
            labelDescriptionArray[i] = document.createElement(`label`);
            testimonialNameArray[i] = document.createElement(`label`);
        }

        for (let i = 0; i < NUMBER_OF_SEPARATORS; i++)
        {
            separatorArray[i] = document.createElement(`div`);
        }

        // Set attributes for created elements
        testimonialBox.classList.add(`description-box`);
        testimonialBox.setAttribute(`id`, `testimonial-box`);

        containerHeader.classList.add(`container-header`);
        containerHeader.textContent = `Testimonials`;

        for (let i = 0; i < numberOfContainers; i++)
        {
            labelDescriptionArray[i].classList.add(`label-description`);
            
            testimonialNameArray[i].classList.add(`label-description`);
            testimonialNameArray[i].classList.add(`testimonial-name`);
            testimonialNameArray[i].setAttribute(`id`, `testimonial-name-${i}`);
        }

        labelDescriptionArray[0].textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus viverra, tristique ex nec, vehicula dolor. Cras egestas, ligula et posuere efficitur, mauris sapien pharetra magna, ornare viverra eros lacus ac magna. Curabitur semper erat aliquam augue luctus finibus. Maecenas ac consequat diam. Proin in scelerisque arcu. Integer id imperdiet justo, at blandit sem. Etiam cursus mauris sollicitudin, euismod sem et, sollicitudin risus. Mauris accumsan odio sed neque fringilla sollicitudin ut in massa. Vivamus aliquet massa risus, in rhoncus nisl maximus vitae. Aliquam sem nulla, mattis id imperdiet ac, porttitor vitae nisl. In ut dolor ac odio blandit dignissim vitae non est. Sed vitae enim non est finibus pretium. Ut at nunc vitae nunc aliquam tempor ac a nunc.`;
        labelDescriptionArray[1].textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus viverra, tristique ex nec, vehicula dolor. Cras egestas, ligula et posuere efficitur, mauris sapien pharetra magna, ornare viverra eros lacus ac magna. Curabitur semper erat aliquam augue luctus finibus. Maecenas ac consequat diam. Proin in scelerisque arcu. Integer id imperdiet justo, at blandit sem. Etiam cursus mauris sollicitudin, euismod sem et, sollicitudin risus. Mauris accumsan odio sed neque fringilla sollicitudin ut in massa. Vivamus aliquet massa risus, in rhoncus nisl maximus vitae. Aliquam sem nulla, mattis id imperdiet ac, porttitor vitae nisl. In ut dolor ac odio blandit dignissim vitae non est. Sed vitae enim non est finibus pretium. Ut at nunc vitae nunc aliquam tempor ac a nunc.`;
        labelDescriptionArray[2].textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at lectus viverra, tristique ex nec, vehicula dolor. Cras egestas, ligula et posuere efficitur, mauris sapien pharetra magna, ornare viverra eros lacus ac magna. Curabitur semper erat aliquam augue luctus finibus. Maecenas ac consequat diam. Proin in scelerisque arcu. Integer id imperdiet justo, at blandit sem. Etiam cursus mauris sollicitudin, euismod sem et, sollicitudin risus. Mauris accumsan odio sed neque fringilla sollicitudin ut in massa. Vivamus aliquet massa risus, in rhoncus nisl maximus vitae. Aliquam sem nulla, mattis id imperdiet ac, porttitor vitae nisl. In ut dolor ac odio blandit dignissim vitae non est. Sed vitae enim non est finibus pretium. Ut at nunc vitae nunc aliquam tempor ac a nunc.`;

        testimonialNameArray[0].textContent = `Mythical Ferrywolf`;
        testimonialNameArray[1].textContent = `Chloe`;
        testimonialNameArray[2].textContent = `Benjamin Brynn`;

        for (let i = 0; i < NUMBER_OF_SEPARATORS; i++)
        {
            separatorArray[i].classList.add(`separator`);
            separatorArray[i].setAttribute(`id`, `separator-${i}`);
        }

        // Append elements for user display
        center.appendChild(testimonialBox);
        testimonialBox.appendChild(containerHeader);

        for (let i = 0; i < numberOfContainers; i++)
        {
            testimonialBox.appendChild(labelDescriptionArray[i]);
            testimonialBox.appendChild(testimonialNameArray[i]);

            if (i < NUMBER_OF_SEPARATORS)
            {
                testimonialBox.appendChild(separatorArray[i]);
            }
        }
    }
    
    const unloadAboutSection = function()
    {
        const aboutBox = document.querySelector(`#about-box`);

        center.removeChild(aboutBox);
    }

    const unloadTestimonialSection = function()
    {
        const testimonialBox = document.querySelector(`#testimonial-box`);

        center.removeChild(testimonialBox);
    }

    const loadHeaderAndSelectionTab = function()
    {
        loadHeader();
        loadSelectionTab();
    }

    // Loads entire contents of home page to user display
    const loadHomePage = function()
    {
        loadAboutSection();
        loadTestimonialSection();
    }

    const unloadHomePage = function()
    {
        unloadAboutSection();
        unloadTestimonialSection();
    }

    return {loadHeaderAndSelectionTab, loadHomePage, unloadHomePage};
})();

// Main program
homePage.loadHeaderAndSelectionTab();
homePage.loadHomePage();

const homeButton = document.querySelector(`#tab-label-0`);
const menuButton = document.querySelector(`#tab-label-1`);
const contactButton = document.querySelector(`#tab-label-2`);

homeButton.addEventListener(`click`, function(e)
{
    if (typeof document.querySelector(`.menu-box`) !== `null`)
    {
        menuPage.unloadMenuPage();
    }
    else if (typeof document.querySelector(`.contact-box`) !== `null`)
    {
        contactPage.unloadContactPage();
    }

    homePage.loadHomePage();
});

menuButton.addEventListener(`click`, function(e)
{
    if (typeof document.querySelector(`#about-box`) !== `null`)
    {
        homePage.unloadHomePage();
    }
    else if (typeof document.querySelector(`.contact-box`) !== `null`)
    {
        contactPage.unloadContactPage();
    }

    menuPage.loadMenuPage();
});

contactButton.addEventListener(`click`, function(e)
{
    if (typeof document.querySelector(`#about-box`) !== `null`)
    {
        homePage.unloadHomePage();
    }
    else if (typeof document.querySelector(`.menu-box`) !== `null`)
    {
        menuPage.unloadMenuPage();
    }

    contactPage.loadContactPage();
});