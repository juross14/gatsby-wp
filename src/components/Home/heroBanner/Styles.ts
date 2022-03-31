
import styled from '../../../styles/globalstyle';

export const HeroBannerSection = styled.section`
    background: url('http://localhost/onewp/wp-content/uploads/2022/02/bg.jpeg');
    padding: 110pt 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: -16px;
    position:relative;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        background: #00000091;
        width: 100%;
        height: 100%;
    }
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
    color: #fff;
`;


export const CtaDescription = styled.div`
    text-align: center;
    font-size: 23px;
    color: #fff;
    line-height: 1.7;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const ButtonCta = styled.a`
    text-decoration: none;
    background-color: #645bff !important;
    border-color: #2d2d2d !important;
    color: #fff !important;
    display: inline-block;
    padding: 8pt 30pt;
    font-size: 18px;
    text-transform: capitalize;
    line-height: 1.7;
    border: 1px solid #6c63ff;
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

export const ButtonCtaCyan = styled.a`
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