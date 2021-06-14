import React from 'react';
import { DiFirebase, DiMaterializecss, DiNodejs, DiReact, DiUikit, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked with a range of technologies to create the front-end of various websites
   </SectionText>
   <List>
   <ListItem>
       <DiReact size="3rem" />
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Experience with <br />
           React.js 
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiNodejs size="3rem" />
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Experience with <br />
           Node and Databasess 
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiUikit size="3rem" />
       <ListContainer>
         <ListTitle>UI/UX</ListTitle>
         <ListParagraph>
           Experience with <br />
           tools like figma
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>
 </Section>
);

export default Technologies;
