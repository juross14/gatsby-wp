import React from 'react';
import { CalltoActionSection, GenericContainer,CtaHeader, CtaDescription, ButtonCta } from './Styles';


export const CallToAction: React.FC = () => {
    return (
            <CalltoActionSection>
                <GenericContainer>                
                    <CtaHeader>Reach us for more Details</CtaHeader>
                    <CtaDescription>Connecting people and creating a livehood to the community.</CtaDescription>
                    <ButtonCta href={"#top"} > Get Started </ButtonCta>
                </GenericContainer>
            </CalltoActionSection>
    );
};