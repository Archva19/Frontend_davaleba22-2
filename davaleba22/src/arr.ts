import GTA5 from "./assets/GTA 5.webp";
import GTAonline from "./assets/GTA online.webp";
import RED from "./assets/RED.webp";
import REDonline from "./assets/RED Online.webp";

import news1 from "./assets/news1.webp";
import news2 from "./assets/news2.webp";
import news3 from "./assets/news3.webp";

import social1 from "./assets/social1.svg";
import social2 from "./assets/social2.svg";
import social3 from "./assets/social3.svg";
import social4 from "./assets/social4.svg";
import social5 from "./assets/social5.svg";

export const images = [
  { id: 1, src: GTA5 },
  { id: 2, src: GTAonline },
  { id: 3, src: RED },
  { id: 4, src: REDonline },
];

export const news = [
  {
    id: 1,
    image: news1,
    title: "Grand Theft Auto VI - Veja o 1° trailer agora",
    game: "Rockstar Games",
    date: "5 de dezembro de 2023",
  },
  {
    id: 2,
    image: news2,
    title: "1° Trailer. Terça-feira, 5 de Dezembro. 9h Et.",
    game: "Rockstar Games",
    date: "1 de dezembro de 2023",
  },
  {
    id: 3,
    image: news3,
    title: "Nova atualização de GTA Online chegando em dezembro",
    game: "GTA Online",
    date: "30 de novembdro de 2023",
  },
];

export const socials = [
  { id: 1, iconSrc: social1, alt: "Twitch", href: "https://www.twitch.tv" },
  {
    id: 2,
    iconSrc: social2,
    alt: "Instagram",
    href: "https://www.instagram.com",
  },
  { id: 3, iconSrc: social3, alt: "Twitter", href: "https://x.com" },
  { id: 4, iconSrc: social4, alt: "Youtube", href: "https://www.youtube.com" },
  {
    id: 5,
    iconSrc: social5,
    alt: "Facebook",
    href: "https://www.facebook.com",
  },
];

export const footerBtns = [
  { id: 1, title: "CONTATO" },
  { id: 2, title: "SOBRE" },
  { id: 3, title: "SUPORTE" },
  { id: 4, title: "EMPREGOS" },
];
