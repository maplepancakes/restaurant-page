const contactPage = (function()
{
    const loadContactPage = function()
    {
        const numberOfArrays = 2;

        const contactTitle =
        [
            `Phone`,
            `Address`
        ]

        const contactDescription = 
        [
            `951-572-2602`,
            `Division 19 Calaveras, CA 95221`
        ]

        let contactTitleArray = [];
        let contactDescriptionArray = [];

        const center = document.querySelector(`center`);
        const mainContentContainer = document.createElement(`div`);
        mainContentContainer.classList.add(`main-content-container`);

        // Create elements
        const contactBox = document.createElement(`div`);
        const contactImage = document.createElement(`img`);
        const separatorVertical = document.createElement(`div`);
        const contactDescriptionContainer = document.createElement(`div`);

        for (let i = 0; i < numberOfArrays; i++)
        {
            contactTitleArray[i] = document.createElement(`label`);
            contactDescriptionArray[i] = document.createElement(`label`);
        }

        // Set attributes for created elements
        contactBox.classList.add(`contact-box`);

        contactImage.classList.add(`menu-image`);
        contactImage.setAttribute(`src`, `./images/aerial-view-painting.resized.jpg`);

        separatorVertical.classList.add(`separator-vertical`);

        contactDescriptionContainer.classList.add(`menu-description-container`);

        for (let i = 0; i < numberOfArrays; i++)
        {
            contactTitleArray[i].classList.add(`label-description`);
            contactTitleArray[i].classList.add(`menu-title`);
            contactTitleArray[i].textContent = contactTitle[i];

            contactDescriptionArray[i].classList.add(`label-description`);
            contactDescriptionArray[i].textContent = contactDescription[i];
        }

        // Append elements for user display
        center.appendChild(mainContentContainer);
        mainContentContainer.appendChild(contactBox);
        contactBox.appendChild(contactImage);
        contactBox.appendChild(separatorVertical);
        contactBox.appendChild(contactDescriptionContainer);
        
        for (let i = 0; i < numberOfArrays; i++)
        {
            contactDescriptionContainer.appendChild(contactTitleArray[i]);
            contactDescriptionContainer.appendChild(contactDescriptionArray[i]);
        }
    }

    return {loadContactPage};
{}})();

export default contactPage