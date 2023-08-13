import fhead from "../Assets/fhead.png";
import Mhead from "../Assets/Mhead.png";
import oldMhead from "../Assets/oldMhead.png";
import oldFhead from "../Assets/oldFhead.png";
import developer from "../Assets/developer.png";
import chef from "../Assets/chef.png";
import socialmedia from "../Assets/socialmedia.png";
import yoga from "../Assets/yoga.png";
import { ReactComponent as Pants } from "../Assets/pants.svg";

const heads = [Mhead, fhead, oldMhead, oldFhead];
export const duplicatedHeads = [...heads, ...heads];
 const torsos = [developer, chef, socialmedia, yoga];
export const duplicatedTorsos = [...torsos, ...torsos];


export {fhead, Mhead, oldFhead, oldMhead, developer, chef, socialmedia, yoga, Pants};
export   const option = [
    {
      option: "Developer",
      value: developer,
    },
    {
      option: "Yoga Instructor",
      value: yoga,
    },
    {
      option: "Social Media Influencer",
      value: socialmedia,
    },
    {
      option: "Chef",
      value: chef,
    },
  ];

  export const calculateIsOfAge = (birthYear) => {
    const year = new Date().getFullYear();
    const age = year - birthYear;

    return age
  }