import { forwardRef, Fragment } from "react";
import styled from "styled-components";
import { InputFieldProps } from "./InputField.types";
import Input from "../Input/Input";

const StyledInput = styled(Input)`
`

const StyledLabel = styled.div`
  font-size: 14px;
  color: ${(props) => (props.disabled ? "#e4e3ea" : "#080808")};
  padding-bottom: ${(props) =>
          props.$variant === "small"
                  ? "0px"
                  : props.$variant === "medium"
                          ? "4px"
                          : "6px"};;
`

const StyledMessage = styled.div`
  font-size: 14px;
  color: #a9150b;
  padding-top: ${(props) =>
          props.$variant === "small"
                  ? "0px"
                  : props.$variant === "medium"
                          ? "2px"
                          : "4px"};
`

const StyledText = styled.p`
  margin: 0;
  color: ${(props) =>
          props.disabled ? "#e4e3ea" : props.$error ? "#a9150b" : "#080808"};
`

const InputField =
    forwardRef<HTMLInputElement, InputFieldProps>((
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
        }: InputFieldProps, ref) => {
        return (
            <Fragment>
                <StyledLabel $variant={variant}>
                    <StyledText disabled={disabled} $error={error}>
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
                <StyledMessage $variant={variant}>
                    <StyledText $error={error}>{message}</StyledText>
                </StyledMessage>
            </Fragment>
        )
    })

export default InputField