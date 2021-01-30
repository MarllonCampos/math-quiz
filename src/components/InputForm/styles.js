import styled from 'styled-components';

export const Container = styled.div`

    width:95%;
    height:85px;
`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    height:100%;
    width:100%;
`;

export const Input = styled.input`
    padding:5px;
    padding-left:15px;
    border:1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.mainBg};
    color:${({ theme }) => theme.colors.contrastText};
    font-weight: 700;

`;

export const Button = styled.button`
    background-color:${({ theme }) => theme.colors.secondary};

    border: 1px solid ${({ theme }) => theme.colors.mainBg};
    border-radius:${({ theme }) => theme.colors.borderRadius};
    color:${({ theme }) => theme.colors.contrastText};
    height:35px;
    font-weight: bold;
    text-align:center;

    &:disabled {
        color:#bdbdbd;
        background-color:rgba(86, 53, 178,0.4);


    }


    &:hover:enabled {
        cursor:pointer;
        background-color:rgb(134, 99, 235)
    }
`;
