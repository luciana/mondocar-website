import React from 'react';

// import { Container } from './styles';

function Footer() {
  return(
      <>
        <div className="footerBase">
          <div>
            © Copyright. All Rights Reserved.          
          </div>
          <div>
            Mondo Car Repair, Inc @ 2011 | <a style={{color:"wheat", textDecoration: "underline"}} target="_blank" rel="noreferrer" href="http://www.google.com/maps?f=q&hl=en&q=9713+Ravenna+Rd,+Twinsburg+Ohio+44087+USA&sll=37.0625,-95.677068&sspn=33.29802,59.238281&ie=UTF8&ll=41.309825,-81.431072&spn=0.007704,0.014462&z=16&iwloc=addr&om=1">
            9713 Ravenna Rd. Twinsburg Ohio 44087
          </a> | <a style={{color:"wheat", textDecoration: "underline"}} href="tel: (330) 405-0555">(330) 405-0555</a> 
          </div>
        </div>
      </>
  );
}

export default Footer;