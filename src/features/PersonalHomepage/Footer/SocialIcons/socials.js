import { styledIcon } from "./styled";
import { ReactComponent as FacebookIcon} from "./icons/facebook.svg";
import { ReactComponent as InstagramIcon} from "./icons/instagram.svg";
import { ReactComponent as GithubIcon} from "./icons/github.svg";
import { ReactComponent as LinkedInIcon} from "./icons/linkedln.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/Dawid-Zieba",
        Icon: styledIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/dawid.zieba.549",
        Icon: styledIcon(FacebookIcon),
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/yothiel5/",
        Icon: styledIcon(InstagramIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dawid-zi%C4%99ba-99b51827b/",
        Icon: styledIcon(LinkedInIcon),
    },
];