import React, { Fragment } from 'react';
import SVG from 'react-inlinesvg';
import { useStaticQuery, graphql } from "gatsby";
import Icon1 from '../../../assets/undraw_tabs.svg';
import Icon2 from '../../../assets/together.svg';

import { ExpandedFeatureSection, ExpandedFeatureSectionWhite, GenericContainer, ExpandedInner, ExpandedInnerReverse, ExpandedMedia, ExpandedContent, ExpandedText } from './Styles';


export const FeatureTwoCol: React.FC = () => {

    const data = useStaticQuery(graphql`
    {
        wpPage(id: {eq: "cG9zdDozOA=="}) {
        fieldsHomepage {
          twocolumns {
            sectionone {
              orderid
              title
              descripiton
              flipside
              featimage {
                mediaItemUrl
              }
            }
            sectionthree {
              orderid  
              title
              descripiton
              flipside
              featimage {
                mediaItemUrl
              }
            }
            sectiontwo {
              orderid    
              title
              descripiton
              flipside
              featimage {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `)

    const sectionOne = data.wpPage.fieldsHomepage.twocolumns.sectionone;
    const sectionTwo = data.wpPage.fieldsHomepage.twocolumns.sectiontwo;

    const alldata = [sectionOne, sectionTwo];

    return (
        <Fragment>
            {alldata.map((item) => (
                <Fragment key={item.title}>
                { item.flipside == "right" ?
                        <ExpandedFeatureSectionWhite >
                            <GenericContainer>
                                <ExpandedInnerReverse>
                                    <ExpandedMedia>
                                        <SVG src={Icon1} cacheRequests={true} width={280} height="100%" />
                                    </ExpandedMedia>
                                    <ExpandedContent>
                                        <h3 > {item ? item.title : "Title Empty"}</h3>
                                        <ExpandedText>{item ? item.descripiton : "Description Empty"}</ExpandedText>
                                    </ExpandedContent>
                                </ExpandedInnerReverse>
                            </GenericContainer>
                        </ExpandedFeatureSectionWhite>
                        :
                        <ExpandedFeatureSection>
                            <GenericContainer>
                                <ExpandedInner>
                                    <ExpandedMedia>
                                        <SVG src={Icon2} cacheRequests={true} width={280} height="100%" />
                                    </ExpandedMedia>
                                    <ExpandedContent>
                                        <h3> {item ? item.title : "Title Empty"}</h3>
                                        <ExpandedText>{item ? item.descripiton : "Description Empty"}</ExpandedText>
                                    </ExpandedContent>
                                </ExpandedInner>
                            </GenericContainer>
                        </ExpandedFeatureSection>
                }
                </Fragment>
            ))}
        </Fragment>
    );
};