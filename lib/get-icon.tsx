import {
  FaFacebook,
  FaInstagramSquare,
  FaTiktok,
  FaUnlink,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareThreads, FaXTwitter } from "react-icons/fa6";

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Threads":
      return <FaSquareThreads className="h-5 w-5" />;
    case "Instagram":
      return <FaInstagramSquare className="h-5 w-5" />;
    case "Facebook":
      return <FaFacebook className="h-5 w-5" />;
    case "YouTube":
      return <FaYoutube className="h-5 w-5" />;
    case "X (formerly Twitter)":
      return <FaXTwitter className="h-5 w-5" />;
    case "Tiktok":
      return <FaTiktok className="h-5 w-5" />;
    default:
      return <FaUnlink className="h-5 w-5" />;
  }
};
