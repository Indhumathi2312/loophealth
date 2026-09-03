// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export function CookiePopup() {
  return (
    <div id="cookie-popup-wrapper" className="cookie-popup-wrapper"><div id="cookie-popup" className="cookie-popup"><div className="div-block-2"><div className="div-block"><img src="/images/6826eafc9b87f5d36efbb83b_cookie.svg" alt="cookie-icon" width={24} height={24} /><p className="paragraph-2">We Value Your Privacy</p></div><p className="paragraph-3">We use cookies to enhance your browsing experience, serve personalised suggestions, and analyse site traffic. By clicking “Accept”, you consent to our use of cookies.</p></div><div className="div-block"><a id="cookie-accept-button" href="#" target="_blank" className="button w-button">Accept</a><a id="cookie-reject-button" href="#" className="button-5 w-button">Decline</a></div></div><div id="cookie-toast-accept" className="cookie-toast-accept"><img src="/images/68271a0b5b1a96d618d3e0e4_Checkmarkcircle.svg" loading="lazy" width={24} height={24} alt="checkmark" /><p className="paragraph-4">Thanks! Your preferences have been saved. Enjoy your experience on our site.</p></div><div id="cookie-toast-reject" className="cookie-toast-reject"><img src="/images/68271dac354e99493950699e_Warning.svg" loading="lazy" width={24} height={24} alt="warning" /><p className="paragraph-4">Got it. We’ve saved your preferences. No cookies will be stored.</p></div><div className="code-embed w-embed w-script" /></div>

  );
}
