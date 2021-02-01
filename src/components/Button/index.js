import styled from 'styled-components';

const Button = styled.button`
    background-color:${({ theme }) => theme.colors.secondary};

    border: 1px solid ${({ theme }) => theme.colors.mainBg};
    border-radius:${({ theme }) => theme.colors.borderRadius};
    color:${({ theme }) => theme.colors.contrastText};
    height:35px;
    font-weight: bold;
    text-align:center;
    transition: background-color 0.2s linear, border-radius 0.4s linear;
    width:100%;

    &:disabled {
        color:#bdbdbd;
        background-color:rgba(86, 53, 178,0.4);


    }


    &:hover:enabled {
        cursor:pointer;
        background-color:rgb(134, 99, 235);
        border-radius:12px;
    }
`;

export default Button;
