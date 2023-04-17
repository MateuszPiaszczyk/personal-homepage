import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/Github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/LinkedIN.svg";
import { ReactComponent as FacebookIcon } from "./icons/Facebook.svg";
import { ReactComponent as InstagramIcon } from "./icons/Instagram.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/MateuszPiaszczyk",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mateusz-piaszczyk",
    Icon: styleIcon(LinkedInIcon),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/piaszczyk",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "Instagram",
    url: "https://instagram.com/matpiasz",
    Icon: styleIcon(InstagramIcon),
  },
];
