import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './globe.svg';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import db_icon from "./mongodb.png";
import cloud_icon from './firebase.png';
import tools_icon from './vscode.png';
export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    db_icon,
    cloud_icon,
    tools_icon,
};

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "C, C++, Python, Java, JavaScript",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "Master of Computer Applications (TCE),\n\nB.Sc in Computer Science",
  },
  {
    icon: assets.web_icon, // add a new asset icon for web
    iconDark: assets.web_icon_dark,
    title: "Web",
    description: "HTML, CSS, Node.js, React.js, Express.js",
  },
  {
    icon: assets.db_icon, // database icon
    iconDark: assets.db_icon_dark,
    title: "Databases",
    description: "MongoDB, MySQL",
  },
  {
    icon: assets.cloud_icon, // cloud/devops icon
    iconDark: assets.cloud_icon_dark,
    title: "DevOps & Cloud",
    description: "AWS, Docker, OCI",
  },
  {
    icon: assets.tools_icon, // tools icon
    iconDark: assets.tools_icon_dark,
    title: "Tools & OS",
    description: "Ubuntu, Git, GitHub",
  },
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const projectData = [
  {
    title: 'Portfolio Website',
    description: 'My skills, projects \n& journey',
    bgImage: '/portfolio.png',
  },
  {
    title: 'Ecofinds',
    description: 'Odoo Hackathon',
    bgImage: '/ecofind-bg.png',
  },
  {
    title: 'Heal n Glow',
    description: 'Growing startup',
    bgImage: '/healnglow.png',
  },
  {
    title: 'Event Organizer',
    description: 'WhatsApp-powered',
    bgImage: '/event-system.png',
  },
];
