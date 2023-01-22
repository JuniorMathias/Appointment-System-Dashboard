import styled from 'styled-components';
import { Link as Router } from 'react-router-dom';

export const SideBar = styled.div`
    margin: 0;
    padding: 0;
    width: 200px;
    // background-color: #181C2e;
    position: fixed;
    height: 100%;
    overflow: auto;
`;
export const CoverAvatar = styled.div`
    background: url('../../assets/cover.png');
    // background-color: #c3c3c3;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
    padding-top: 30px;
`;
export const Avatar = styled.img`
    border-radius: 50%;
    display: block;
    margin:auto;
    width: 90px;
    height: 90px;
    -webkit-filter: drop-shadow(2px 3px 6px #121212);
    filter: drop-shadow(2px 3px 6px #121212);
    object-fit: cover;
`;

export const Link = styled(Router)`
    color: red !important;
    background-color: #121212;
    padding: 16px !important;
    display: flex !important;
    cursor: pointer !important;
    flex-direction: row !important;
    align-items: center !important;
    transition: ease-in-out .4s !important;
    &:hover {
        background-color: #121212;
        color: #c3ce3c;
    }
`;