import React from 'react';
import { CalltoActionSection, GenericContainer,CtaHeader, CtaDescription, ButtonCta } from './Styles';


export const CallToAction: React.FC = () => {
    return (
            <CalltoActionSection>
                <GenericContainer>                
                    <CtaHeader>Reach us For More Information</CtaHeader>
                    <CtaDescription>Grab the production version and begin your project instantly.</CtaDescription>
                    <ButtonCta href={"https://github.com/styled-components/styled-components"} > Get Started </ButtonCta>
                </GenericContainer>
            </CalltoActionSection>
    );
};