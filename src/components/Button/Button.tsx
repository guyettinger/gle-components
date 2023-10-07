import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{$primary?:boolean, $size?:string, disabled?:boolean}>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
          props.$size === "small"
                  ? "7px 25px 8px"
                  : props.$size === "medium"
                          ? "9px 30px 11px"
                          : "14px 30px 16px"};
  color: ${(props) => (props.$primary ? props.theme.gle.color.buttonPrimaryForeground : props.theme.gle.color.buttonRegularForeground)};
  background-color: ${(props) => (props.$primary ? props.theme.gle.color.buttonPrimaryBackground: props.theme.gle.color.buttonRegularBackground)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${(props) => (props.$primary ? props.theme.gle.color.buttonPrimaryBackgroundHover : props.theme.gle.color.buttonRegularBackgroundHover)};
  }

  &:active {
    border: solid 2px ${(props) => (props.$primary ? props.theme.gle.color.buttonPrimaryActiveBorderColor : props.theme.gle.color.buttonRegularActiveBorderColor)};
    padding: ${(props) =>
            props.$size === "small"
                    ? "5px 23px 6px"
                    : props.$size === "medium"
                            ? "7px 28px 9px"
                            : "12px 28px 14px"};
  }
`

const Button =
    ({
         size,
         primary,
         disabled,
         onClick,
         children,
         ...props
     }: ButtonProps) => {
        return (
            <StyledButton
                type="button"
                onClick={onClick}
                disabled={disabled}
                $primary={primary}
                $size={size}
                {...props}>
                {children}
            </StyledButton>
        )
    }

export default Button