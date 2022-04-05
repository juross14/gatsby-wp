import styled from '../../../styles/globalstyle';


export const FeatureThreeColSection = styled.section`
    padding: 50pt 0;
`;


export const GenericContainer = styled.div`
    width: 88%;
    max-width: 1080px;
    margin: 0 auto;
    position: relative;
    text-align: center;
`;

export const FeatureInner = styled.div`
    -js-display:flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around
`;

export const FeatureStep = styled.div`
    text-align: center;
    padding: 5pt 5px;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column
`;

export const FeatureDesc = styled.div`
    max-width: 36ch;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;

export const FeatureMedia = styled.div`
    margin: 12pt 0;
`;

export const FeatureImage = styled.img`
    max-height: 100px;
    max-width: 222px;
    margin-top: 8pt;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
`;
