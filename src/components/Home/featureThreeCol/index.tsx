import React from 'react';
import SVG from 'react-inlinesvg';
import { StaticQuery, graphql } from "gatsby"
import Icon1 from '../../../assets/undraw_designer.svg';
import Icon2 from '../../../assets/undraw_everywhere.svg';
import Icon3 from '../../../assets/undraw_hello_aeia.svg';

import { FeatureThreeColSection, GenericContainer, FeatureInner, FeatureStep, FeatureMedia, FeatureDesc } from './Styles';


export const FeatureThreeCol: React.FC = () => {
	return (
		<StaticQuery
			query={graphql`
				{
					wpPage(id: {eq: "cG9zdDozOA=="}) {
							fieldsHomepage {
								threecolums {
									featuredDescription
									featuredHeading
										featureone {
											description
											headings
										}
										featuretwo {
											description
											headings
										}
										featurethree {
											description
											headings
										}
								}
							}
					}
				}
			`}
			render={data => (<FeatureThreeColSection>
				<GenericContainer>
					<h2>{data.wpPage.fieldsHomepage.threecolums? data.wpPage.fieldsHomepage.threecolums.featuredHeading:'Heading is Empty' }</h2>
					<p>{data.wpPage.fieldsHomepage.threecolums? data.wpPage.fieldsHomepage.threecolums.featuredDescription:'Description is Empty' }</p>
				</GenericContainer>
				<GenericContainer>


					<FeatureInner>
						<FeatureStep>
							<FeatureMedia>
								<SVG src={Icon1} cacheRequests={true} width={150} height="100%" />
							</FeatureMedia>
							<h4>{data.wpPage.fieldsHomepage.threecolums? data.wpPage.fieldsHomepage.threecolums.featureone.headings:'Heading is Empty' }</h4>
							<FeatureDesc>{data.wpPage.fieldsHomepage.threecolums? data.wpPage.fieldsHomepage.threecolums.featureone.description:'Description is Empty' }</FeatureDesc>
						</FeatureStep>
						<FeatureStep>
							<FeatureMedia>
								<SVG src={Icon2} cacheRequests={true} width={150} height="100%" />
							</FeatureMedia>
							<h4>{data.wpPage.fieldsHomepage.threecolums? data.wpPage.fieldsHomepage.threecolums.featuretwo.headings:'Heading is Empty' }</h4>
							<FeatureDesc>{data.wpPage.fieldsHomepage.threecolums? data.wpPage.fieldsHomepage.threecolums.featuretwo.description:'Description is Empty' }</FeatureDesc>
						</FeatureStep>
						<FeatureStep>
							<FeatureMedia>
								<SVG src={Icon3} cacheRequests={true} width={150} height="100%" />
							</FeatureMedia>
							<h4>{data.wpPage.fieldsHomepage.threecolums? data.wpPage.fieldsHomepage.threecolums.featurethree.headings:'Heading is Empty' }</h4>
							<FeatureDesc>{data.wpPage.fieldsHomepage.threecolums? data.wpPage.fieldsHomepage.threecolums.featurethree.description:'Description is Empty' }</FeatureDesc>
						</FeatureStep>
					</FeatureInner>
				</GenericContainer>
			</FeatureThreeColSection>)}
		></StaticQuery>
	);
};