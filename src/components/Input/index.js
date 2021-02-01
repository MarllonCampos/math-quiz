/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const InputBase = styled.input`
    padding:5px;
    padding-left:15px;
    border:1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.mainBg};
    color:${({ theme }) => theme.colors.contrastText};
    font-weight: 700;
    width:100%;
    margin-bottom:25px;

`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase onChange={onChange} placeholder={placeholder} {...props} />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
