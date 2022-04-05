
import styled from '../../../styles/globalstyle';


export const CalltoActionSection = styled.section`
    background: -webkit-gradient(linear,right top,left top,from(#6159e6),to(#329373));
    background: linear-gradient(270deg,#6159e6,#329373);
    padding: 50pt 0;
    margin-bottom: -50px;
`;

export const GenericContainer = styled.div`
    width: 88%;
    max-width: 1080px;
    margin: 0 auto;
    position: relative;
    text-align: center;
`;

export const CtaHeader = styled.span`
    font-size: 1.953rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #4effd1;
`;


export const CtaDescription = styled.div`
    text-align: center;
    font-size: 23px;
    color: #fff;
    line-height: 1.7;
    font-weight: 400;
`;

export const ButtonCta = styled.a`
    text-decoration: none;
    background-color: #06d19c !important;
    border-color: #06d19c !important;
    color: #fff !important;
    display: inline-block;
    padding: 8pt 30pt;
    font-size: 18px;
    text-transform: capitalize;
    line-height: 1.7;
    border: 1px solid;
    color: #6c63ff;
    font-weight: 400;
    -webkit-transition: .7s;
    white-space: nowrap;
    cursor: pointer;
    background-color: transparent;
    border-radius: 30px;
    margin-top: 20px;
    transition: .7s;
    text-decoration:none !important;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
        &:hover{
            background: #7972f4 !important;
            border: #7972f4 !important;
        }
`;