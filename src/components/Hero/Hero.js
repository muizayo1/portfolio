import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I help different institutions and companies to scale up their profit by building interactive and modern front-end page for their website.
      </SectionText>
      <Button onClick={()=> window.location = "https://github.com/muizayo1"}>CONTACT ME</Button>
    </LeftSection>
  </Section>
);

export default Hero;