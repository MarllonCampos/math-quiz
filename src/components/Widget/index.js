import styled from 'styled-components';

const Widget = styled.div`
  margin:24px 0;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }

`;

Widget.Content = styled.div`
  padding: 24px ;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }


  
`;

Widget.Header = styled.header`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding:18px 32px;
  background-color:${({ theme }) => theme.colors.primary};

  *{margin:0;}
`;

Widget.Topic = styled.a`
  outline:0;
  text-decoration:none;
  color: ${({ theme }) => theme.colors.contrasText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding:10px 20px;
  margin-bottom:8px;
  border-radius:${({ theme }) => theme.borderRadius}
  transition: 300;
  display:block;

  &:hover, &:focus {
    opacity:0.5;
  }
`;
export default Widget;
