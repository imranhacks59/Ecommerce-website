import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './SocialIcons.css'
function SocialIcons() {
  return (
    <footer>
      <div className="rounded-social-buttons">
        <a className="social-button facebook" href="https://www.facebook.com/" target="_blank">
          <FacebookIcon />
        </a>
        <a className="social-button twitter" href="https://www.twitter.com/" target="_blank">
          <TwitterIcon />
        </a>
        <a className="social-button linkedin" href="https://www.linkedin.com/" target="_blank">
          <LinkedInIcon />
        </a>
        <a className="social-button youtube" href="https://www.youtube.com/" target="_blank">
          <YouTubeIcon />
        </a>
        <a className="social-button instagram" href="https://www.instagram.com/" target="_blank">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default SocialIcons;
