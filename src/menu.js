const menuPage = (function()
{
    // Loads menu to user display
    const loadMenuPage = function()
    {
        const center = document.querySelector(`center`); 
        const mainContentContainer = document.createElement(`div`);
        mainContentContainer.classList.add(`main-content-container`);
        
        const numberOfMenus = 4; // Number of menus to generate

        const imageSource = 
        [
            `./images/ice-gem-biscuit-resized.jpg`,
            `./images/jelly-resized.jpg`,
            `./images/oreo-resized.jpg`,
            `./images/white-rabbit-resized.jpg`
        ] // Image of menu items

        const menuTitle =
        [
            `Ice Gem Biscuits`,
            `Jelly Topped with Cream`,
            `Oreos and Milk`,
            `White Rabbit Candy`
        ] // Title of menu items

        const menuDescription =
        [
            `Remember when we were children, visiting our grandparent's house and seeing these simple yet delicious delicacies packed in clear plastic? We have them here.`,
            `A fancier take on the cup jellies that we used to eat when we were younger. A dessert that brings us back to simpler times.`,
            `Breakfast, lunch, or dinner, there is no better time to enjoy oreos dipped in milk. Careful, eat too much, and you may get a stern lecture from your parents for eating too much of this irresistible combination.`,
            `A white-coloured candy with a soft and chewy texture. Not made from actual white rabbits.`
        ] // Description of menu items

        // Arrays for storing elements
        let menuBoxArray = [];
        let menuImageArray = [];
        let separatorVerticalArray = [];
        let menuDescriptionContainerArray = [];
        let menuTitleArray = [];
        let menuDescriptionArray = [];

        for (let i = 0; i < numberOfMenus; i++)
        {
            // Create elements
            menuBoxArray[i] = document.createElement(`div`);
            menuImageArray[i] = document.createElement(`img`);
            separatorVerticalArray[i] = document.createElement(`div`);
            menuDescriptionContainerArray[i] = document.createElement(`div`);
            menuTitleArray[i] = document.createElement(`label`);
            menuDescriptionArray[i] = document.createElement(`label`);

            // Set attributes for created elements
            menuBoxArray[i].classList.add(`menu-box`);

            menuImageArray[i].classList.add(`menu-image`);
            menuImageArray[i].setAttribute(`src`, imageSource[i]);

            separatorVerticalArray[i].classList.add(`separator-vertical`);

            menuDescriptionContainerArray[i].classList.add(`menu-description-container`);

            menuTitleArray[i].classList.add(`label-description`);
            menuTitleArray[i].classList.add(`menu-title`);
            menuTitleArray[i].textContent = menuTitle[i];

            menuDescriptionArray[i].classList.add(`label-description`);
            menuDescriptionArray[i].textContent = menuDescription[i];

            // Append elements for user display
            center.appendChild(mainContentContainer);
            mainContentContainer.appendChild(menuBoxArray[i]);
            menuBoxArray[i].appendChild(menuImageArray[i]);
            menuBoxArray[i].appendChild(separatorVerticalArray[i]);
            menuBoxArray[i].appendChild(menuDescriptionContainerArray[i]);
            menuDescriptionContainerArray[i].appendChild(menuTitleArray[i]);
            menuDescriptionContainerArray[i].appendChild(menuDescriptionArray[i]);
        }
    }

    return {loadMenuPage};
})();

export default menuPage;
