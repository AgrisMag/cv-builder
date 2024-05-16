import styled from "@emotion/styled";
import { ChangeEvent } from "react";

type CheckboxProps = {
  label: string;
  onChange: (label: string, isChecked: boolean) => void;
};

export const Checkbox = ({ label, onChange }: CheckboxProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(label, e.target.checked);
  };

  return (
    <CheckboxWrapper>
      <input
        type="checkbox"
        name="section"
        value={label}
        onChange={handleChange}
      />
      <label htmlFor={label}>{label}</label>
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.div`
  display: flex;
  margin: 10px 0;
  input {
    margin-right: 10px;
  }
`;
