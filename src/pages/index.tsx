import * as React from 'react'


import Page from '../components/Page'
import IndexLayout from '../layouts'
import { FeatureThreeCol } from '../components/Home/featureThreeCol'
import { FeatureTwoCol } from '../components/Home/featureTwoCol'
import { CallToAction } from '../components/Home/calltoAction'
import { HeroBanner }  from '../components/Home/heroBanner'


const IndexPage = () => (
  <IndexLayout>
    <Page>
      <HeroBanner /> 
      <FeatureThreeCol />
      <FeatureTwoCol />
      <CallToAction />
    </Page>
  </IndexLayout>
)

export default IndexPage
