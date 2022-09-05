import { Link } from "react-router-dom";
import classes from "./Logo.styles";

export const Logo = () => {
  return (
    <div className={classes.wrapper}>
      <Link to="/" className={classes.link}>
        <span className={classes.logo}>
          <img
            alt="Logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACaElEQVRIie2UzUuUURTGf+fOOzpKTpgLtUCLyoyCSAUdcLRo4zgJORDUpg8Ihf6CoG1/QpugVbsQrMgZDaQUJVRcBAUplmkQWEhfLpSZee9pkWOTaM28pIvw2Z17zvM85x7uubCDHBGODVSGYwOVXvnGC6m+a9Jv1L1v1O2NRBKF22a8a/HTbSAMNC0HuLMtxi2xeDeqXZlY0cut5/q6/sTZCJJPcWvn4xCYZ8D68aawemb40dmRf2586ny8QtNMAvs2KVnwObbhaU/Hh1z0ch61pvQ6ymuUQWAlK7WCMojyyk1Jd656eY06g9bO+BxQvRrODz+I7s9Xw9Or/hfYMd42OF5I6jfluGp/Kki5Fw1PN9ZCccSqEavGFhtPzXsbtZvVhHjaSG/GkrRrPBvwedLIm9QYSQTF1V/GRT5zZHSqZMuNCwM0ZMfuHj/i89VvubFgL2THyb0BrOrFLTVuicVbQK6sHfiEZFUxwNWa0elwPlo5PcnGSCIYCOg14BZQlDlfPh7ka2RtjZcRuSmue3e6uXYpL+PmaF+pUyCNipaIyG6rHETlpIiGgOA65uLH7gNiS5yydZrfQZ8DLxDeippvIEsFrn/8Zbj6S6bot+V3/HpCkX4QVFe7Et2o4c/W2qgbdESUfqA0KxcEaQPaUFAUUFJO8jQwlCnysoMDPqFu5GHHxEyoZtyIW6fwJF+RXL+7eUQTgrk31Ns+lp2YCh2dA9oOjc40ieglEW0Hqd5EZ2PjtJ9Zk9YbgiQRFo3Ke3V0eqgnuvA3oTfNh8eAMYBjE+8qXDdda9VWIaZMLAVJa2ZzvOR/ih87xcfz9oUBNQAAAABJRU5ErkJggg=="
          />
        </span>
        <span className={classes.title}>slat</span>
      </Link>
    </div>
  );
};
