import { forwardRef } from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{
    $primary?: boolean,
    $variant?: string,
    disabled?: boolean
}>`
  border: 0;
  line-height: 1;
  font-size: ${(props) =>
          props.$variant === "small"
                  ? "12px"
                  : props.$variant === "medium"
                          ? "14x"
                          : "15px"};
  cursor: pointer;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
          props.$variant === "small"
                  ? "5px 20px 5px"
                  : props.$variant === "medium"
                          ? "7px 25px 8px"
                          : "9px 30px 11px"};
  color: ${(props) => (props.$primary ? props.theme.gle.color.buttonPrimaryForeground : props.theme.gle.color.buttonForeground)};
  background: ${(props) => (props.$primary ? props.theme.gle.color.buttonPrimaryBackground : props.theme.gle.color.buttonBackground)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) => (props.$primary ? props.theme.gle.color.buttonPrimaryBackgroundHover : props.theme.gle.color.buttonBackgroundHover)};
  }

  &:active {
    border: solid 2px ${(props) => (props.$primary ? props.theme.gle.color.buttonPrimaryActiveBorderColor : props.theme.gle.color.buttonActiveBorderColor)};
    padding: ${(props) =>
            props.$variant === "small"
                    ? "3px 18px 3px"
                    : props.$variant === "medium"
                            ? "5px 23px 6px"
                            : "7px 28px 9px"};
  }
`

const Button =
    forwardRef<HTMLButtonElement, ButtonProps>((
        {
            variant,
            primary,
            disabled,
            onClick,
            children,
            ...props
        }: ButtonProps, ref) => {
        return (
            <StyledButton
                ref={ref}
                type="button"
                onClick={onClick}
                disabled={disabled}
                $primary={primary}
                $variant={variant}
                {...props}>
                {children}
            </StyledButton>
        )
    })

export default Button