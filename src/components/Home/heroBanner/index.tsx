
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { HeroBannerSection, GenericContainer, CtaHeader, CtaDescription, ButtonCta, ButtonCtaCyan } from './Styles';


export const HeroBanner: React.FC = () => {
    return (
        <StaticQuery
            query={graphql`
            {
                wpPage(id: {eq: "cG9zdDozOA=="}) {
                        fieldsHomepage {
                            headingshome
                            descriptionhome
                            bannerbuttons {
                                leftbutton {
                                  title
                                  url
                                }
                                rightbutton {
                                  title
                                  url
                                }
                              }
                        }
                }
            }
         `}
    render={data => (
                <HeroBannerSection>
                    <GenericContainer>
                        <CtaHeader>{data.wpPage.fieldsHomepage.headingshome? data.wpPage.fieldsHomepage.headingshome :'Heading is Empty' }</CtaHeader>
                        <CtaDescription>{data.wpPage.fieldsHomepage.descriptionhome? data.wpPage.fieldsHomepage.descriptionhome : 'Hero Description is Empty'}</CtaDescription>
                            <ButtonCtaCyan href={data.wpPage.fieldsHomepage.bannerbuttons? data.wpPage.fieldsHomepage.bannerbuttons.leftbutton.url : 'URL is Empty'} > {data.wpPage.fieldsHomepage.bannerbuttons? data.wpPage.fieldsHomepage.bannerbuttons.leftbutton.title : 'TITLE is Empty'} </ButtonCtaCyan>
                            <ButtonCta href={data.wpPage.fieldsHomepage.bannerbuttons? data.wpPage.fieldsHomepage.bannerbuttons.rightbutton.url : 'URL is Empty'} > {data.wpPage.fieldsHomepage.bannerbuttons? data.wpPage.fieldsHomepage.bannerbuttons.rightbutton.title : 'TITLE is Empty'} </ButtonCta>
                    </GenericContainer>
                </HeroBannerSection>)}
        ></StaticQuery>
        );
    };

