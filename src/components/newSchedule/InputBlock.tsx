import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { gray_check, green_check } from '../../assets/NewSchedule/index';
import { useFormContext, useWatch } from 'react-hook-form';

type InputProps = {
  img: string;
  altName: string;
  placeholder: string;
  valueName: string;
  type: string;
  options?: string[];
};

const InputBlock = (props: InputProps) => {
  const { register, watch } = useFormContext();
  const { img, altName, placeholder, valueName, type } = props;

  return (
    <StyledWrapper>
      <div className="image-container">
        <img className="label-image" src={img} alt={altName} />
      </div>
      {type === 'input' ? (
        <input
          className={valueName}
          placeholder={placeholder}
          {...register(valueName)}
        />
      ) : (
        <select {...register(valueName)}>
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
          {props.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      <div className="check-container">
        <img
          id={valueName}
          src={watch(valueName) ? green_check : gray_check}
          alt="gray_check"
        />
      </div>
    </StyledWrapper>
  );
};

export default InputBlock;

const centerAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  ${centerAlign};
  width: 100%;
  height: 20%;
  .image-container,
  .check-container {
    height: 100%;
    width: 10%;
    ${centerAlign};
  }
  input,
  select {
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    width: 80%;
    height: 50%;
    padding: 0 10px;
  }
`;
