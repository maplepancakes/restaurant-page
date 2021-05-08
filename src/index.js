import menuPage from "./menu";
import contactPage from "./contact";

const homePage = (function()
{  
    const contentDiv = document.querySelector(`#content`);

    const center = document.createElement(`center`);

    contentDiv.appendChild(center);

    // Loads header to user display
    const loadHeader = function()
    {
        // Create elements
        const header = document.createElement(`header`);
        const h1 = document.createElement(`h1`);

        // Set attribute for created element
        h1.textContent = `Des Jours Plus Heureux`;

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
    const loadAboutSection = function(mainContentContainer)
    {
        // Create elements
        const aboutBox = document.createElement(`div`);
        const containerHeader = document.createElement(`h2`);
        const labelDescription = document.createElement(`label`);

        // Set attributes for created elements
        aboutBox.classList.add(`description-box`);
        aboutBox.setAttribute(`id`, `about-box`);

        containerHeader.classList.add(`container-header`);
        containerHeader.textContent = `About Us`;

        labelDescription.classList.add(`label-description`);
        labelDescription.textContent = `'Des Jours Plus Heureux', or 'Happier Times', is a place for reflection to the past. Our restaurant prides on providing an environment which brings you back to a time when things were much more simpler and happier. With our track record of satisfied customers that predates more than half a millenium, rest assured, you too, will come out of this place feeling the same.`;
        
        // Append elements for user display
        center.appendChild(mainContentContainer);
        mainContentContainer.appendChild(aboutBox);
        aboutBox.appendChild(containerHeader);
        aboutBox.appendChild(labelDescription);
    }

    // Loads `Testimonial` section to user display
    const loadTestimonialSection = function(mainContentContainer)
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

        labelDescriptionArray[0].textContent = `Going to this restaurant brings me back to a time when things were less depressing. I was just a wee little wolf back then, chasing white rabbits with my little wolf buddies and my happy wolf family. Now, they are all dead and I ship lost souls to their salvation or demise for a living. But this place, it helps me forget, even for just a little while.`;
        labelDescriptionArray[1].textContent = `I used to know this boy, everyone called him Benny. He lived next to me. He was a strange and quiet boy, who seemed to take a huge interest in photography. He was always taking pictures of... well, anything. One day, I walked up to him taking pictures in his backyard, and told him that if he took a nice portrait of me, I would share some of my oreos with him. That was how we became friends. Not long after that, he got really sick and passed away. He was my first love and I miss him. Coming to this place helps me remember the happy moments that we used to share.`;
        labelDescriptionArray[2].textContent = `Everyone calls me Benny, or well... at least they used to. It's lonely out here, but at least I have this weird looking humanoid wolf that keeps me company. He often tells me stories to keep me entertained, though recently he would not shut up about this restaurant that he keeps going to. He keeps saying that the place is great, and I do believe him. I guess I am just annoyed that I will not be able to go, which does not come as much of a surprise considering that I am dead. Oh well, maybe in another life.`;

        testimonialNameArray[0].textContent = `Mythical Ferrywolf`;
        testimonialNameArray[1].textContent = `Chloe`;
        testimonialNameArray[2].textContent = `Benjamin Brynn`;

        for (let i = 0; i < NUMBER_OF_SEPARATORS; i++)
        {
            separatorArray[i].classList.add(`separator`);
            separatorArray[i].setAttribute(`id`, `separator-${i}`);
        }

        // Append elements for user display
        center.appendChild(mainContentContainer);
        mainContentContainer.appendChild(testimonialBox);
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

    // Loads header and selection tab to user display
    const loadHeaderAndSelectionTab = function()
    {
        loadHeader();
        loadSelectionTab();
    }

    // Loads `What are we?` and `Testimonial` section to user display
    const loadHomePage = function()
    {
        const mainContentContainer = document.createElement(`div`);
        mainContentContainer.classList.add(`main-content-container`);

        loadAboutSection(mainContentContainer);
        loadTestimonialSection(mainContentContainer);
    }

    // Unloads contents (exclusive of header and selection tab) from user display
    const unloadPageContents = function()
    {
        const mainContentContainer = document.querySelector(`.main-content-container`);

        center.removeChild(mainContentContainer);
    }

    return {loadHeaderAndSelectionTab, loadHomePage, unloadPageContents};
})();

// Main program
homePage.loadHeaderAndSelectionTab();
homePage.loadHomePage();

const homeButton = document.querySelector(`#tab-label-0`);
const menuButton = document.querySelector(`#tab-label-1`);
const contactButton = document.querySelector(`#tab-label-2`);

homeButton.addEventListener(`click`, function(e)
{
    homePage.unloadPageContents();

    homePage.loadHomePage();
});

menuButton.addEventListener(`click`, function(e)
{
    homePage.unloadPageContents();

    menuPage.loadMenuPage();
});

contactButton.addEventListener(`click`, function(e)
{
    homePage.unloadPageContents();

    contactPage.loadContactPage();
});