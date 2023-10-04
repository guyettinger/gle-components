import { forwardRef, Fragment } from "react";
import styled from "styled-components";
import { InputProps } from "./Input.types";

const StyledInput = styled.input<InputProps>`
  height: ${(props) =>
          props.variant === "small"
                  ? "16px"
                  : props.variant === "medium"
                          ? "24px"
                          : "40px"};;
  width: 300px;
  border: solid 2px ${(props) =>
          props.disabled
                  ? "#e4e3ea"
                  : props.error
                          ? "#a9150b"
                          : props.success
                                  ? "#067d68"
                                  : "#353637"};
  background-color: #fff;
  margin: ${(props) =>
          props.variant === "small"
                  ? "-2px 0 -6px -2px"
                  : props.variant === "medium"
                          ? "0"
                          : "0"};

  &:focus {
    border: solid 2px #1b116e;
  }
`

const StyledLabel = styled.div<InputProps>`
  font-size: 14px;
  color: ${(props) => (props.disabled ? "#e4e3ea" : "#080808")};
  padding-bottom: ${(props) =>
          props.variant === "small"
                  ? "0px"
                  : props.variant === "medium"
                          ? "4px"
                          : "6px"};;
`

const StyledMessage = styled.div<InputProps>`
  font-size: 14px;
  color: #a9150b;
  padding-top: ${(props) =>
          props.variant === "small"
                  ? "0px"
                  : props.variant === "medium"
                          ? "2px"
                          : "4px"};
`

const StyledText = styled.p<InputProps>`
  margin: 0;
  color: ${(props) =>
          props.disabled ? "#e4e3ea" : props.error ? "#a9150b" : "#080808"};
`

const Input =
    forwardRef<HTMLInputElement, InputProps>((
        {
            id,
            disabled,
            label,
            message,
            error,
            success,
            onChange,
            placeholder,
            variant,
            ...props
        }: InputProps, ref) => {
        return (
            <Fragment>
                <StyledLabel variant={variant}>
                    <StyledText disabled={disabled} error={error}>
                        {label}
                    </StyledText>
                </StyledLabel>
                <StyledInput
                    id={id}
                    ref={ref}
                    type="text"
                    onChange={onChange}
                    disabled={disabled}
                    error={error}
                    success={success}
                    placeholder={placeholder}
                    variant={variant}
                    {...props}>
                </StyledInput>
                <StyledMessage variant={variant}>
                    <StyledText error={error}>{message}</StyledText>
                </StyledMessage>
            </Fragment>
        )
    })

export default Input