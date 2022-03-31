import styled from '../../../styles/globalstyle';


export const ExpandedFeatureSection = styled.section`
    background-color: #f7f7f7;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 72pt 0;
`;

export const ExpandedFeatureSectionWhite = styled.section`
    background-color: #FFF;
    padding: 72pt 0;
`;



export const GenericContainer = styled.div`
    width: 88%;
    max-width: 1080px;
    margin: 0 auto;
    position: relative;
    text-align: center;
`;

export const ExpandedInner = styled.div`
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    display: flex;
`;

export const ExpandedInnerReverse = styled.div`
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    display: flex;
    flex-direction: row-reverse;
`;

export const ExpandedMedia = styled.div`
    width: 50%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-ordinal-group: unset;
    -ms-flex-order: unset;
    order: unset;
`;

export const ExpandedContent = styled.div`
    padding: 0 16pt;
    width: 50%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-ordinal-group: unset;
    -ms-flex-order: unset;
    order: unset;
    text-align:left;
`;

export const ExpandedImage = styled.div`
    width: 90%;
    max-width: 280px;
    padding: 16pt 0;
`;

export const ExpandedText = styled.div`
    max-width: 60ch;
`;


