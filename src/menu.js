const menuPage = (function()
{
    // Loads menu to user display
    const loadMenuPage = function()
    {
        const center = document.querySelector(`center`); 
        console.log(center)
        
        const numberOfMenus = 4; // Number of menus to generate

        const imageSource = 
        [
            `../images/ice-gem-biscuit-resized.jpg`,
            `../images/jelly-resized.jpg`,
            `../images/oreo-resized.jpg`,
            `../images/white-rabbit-resized.jpg`
        ] // Image of menu items

        const menuTitle =
        [
            `Placeholder`,
            `Placeholder`,
            `Placeholder`,
            `Placeholder`
        ] // Title of menu items

        const menuDescription =
        [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
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
            center.appendChild(menuBoxArray[i]);
            menuBoxArray[i].appendChild(menuImageArray[i]);
            menuBoxArray[i].appendChild(separatorVerticalArray[i]);
            menuBoxArray[i].appendChild(menuDescriptionContainerArray[i]);
            menuDescriptionContainerArray[i].appendChild(menuTitleArray[i]);
            menuDescriptionContainerArray[i].appendChild(menuDescriptionArray[i]);
        }
    }

    // Unloads menu from user display
    const unloadMenuPage = function()
    {
        const center = document.querySelector(`center`);

        const menuBox = document.querySelectorAll(`.menu-box`);

        for (let i = 0; i < menuBox.length; i++)
        {
            center.removeChild(menuBox[i]);
        }
    }

    return {loadMenuPage, unloadMenuPage};
})();

export default menuPage;
