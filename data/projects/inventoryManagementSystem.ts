import { ProjectData } from "../../types";

const inventoryManagementSystem: ProjectData = {
  id: "inventory-management-system",
  title: "Inventory Management System",
  summary: "A M.E.R.N stack app for tracking inventory.",
  paragraphs: [
    `
    This application was made with the intention of being used in a home, school
    or office type environment to be accessed by clients on the local network. 
    With the help of Material-UI, the client side of this program is fully responsive
    and easy to use both on desktop and mobile devices. The GUI is comprised of three 
    main parts: the main table, the expiring soon panel and the low stock panel. 
    The main table is where all the inventory items displayed. The main table features
    a search bar and also buttons to perform CRUD operations on the items.
  `,
    `
    All items have the following attributes: item name, quantity, room, location,
    expiration date and low stock alert. Items with an expiration date set are monitored 
    by the program and are added to the expiring soon panel when the expiration date is two 
    weeks away or less. Each day, the program will compile a list of items expiring the following 
    day and will notify all users by sending them an email alert.
  `,
    `
    Items with the low stock alert turned on are be monitored by the program so that when the quantity
    of the item falls to 1, it is added to the list of items low in stock. From there, a user can choose 
    to send a low stock alert, which will send emails to specified users with the list of low stock items.
  `,
  ],
  projectPageURI: "/projects/inventory-management-system",
  screenshotURIs: [
    "/images/projects/ims.png",
    "/images/projects/edit-item-modal.png",
    "/images/projects/remove-item-modal.png",
    "/images/projects/email-settings.png",
  ],
  mainLanguage: "JavaScript",
  links: [
    {
      label: "GitHub link",
      URL: "https://github.com/Jamnic98/inventory-management-system",
      type: "external",
    },
  ],
  techStack: [
    "JavaScript",
    "React",
    "React Testing Library",
    "Jest",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "Mongoose",
    "MaterialUI",
  ],
};

export default inventoryManagementSystem;
