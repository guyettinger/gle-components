import { forwardRef } from "react";
import styled from "styled-components";
import { InputProps } from "./Input.types";

const StyledInput = styled.input<InputProps>`
  height: ${(props) =>
          props.$variant === "small"
                  ? "11px"
                  : props.$variant === "medium"
                          ? "24px"
                          : "40px"};;
  width: 300px;
  border: solid 2px ${(props) =>
          props.disabled
                  ? "#e4e3ea"
                  : props.$error
                          ? "#a9150b"
                          : props.$success
                                  ? "#067d68"
                                  : "#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`

const Input =
    forwardRef<HTMLInputElement, InputProps>((
        {
            id,
            variant,
            disabled,
            error,
            success,
            placeholder,
            onChange,
            ...props
        }: InputProps, ref) => {
        return (
            <StyledInput
                id={id}
                ref={ref}
                type="text"
                $variant={variant}
                disabled={disabled}
                $error={error}
                $success={success}
                placeholder={placeholder}
                onChange={onChange}
                {...props}>
            </StyledInput>
        )
    })

export default Input