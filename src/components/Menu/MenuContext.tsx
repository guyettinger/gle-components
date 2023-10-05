import { createContext, Dispatch, HTMLProps, SetStateAction } from "react";

const MenuContext = createContext<{
    getItemProps: (userProps?: HTMLProps<HTMLElement>) => Record<string, unknown>
    activeIndex: number | null
    setActiveIndex: Dispatch<SetStateAction<number | null>>
    setHasFocusInside: Dispatch<SetStateAction<boolean>>
    isOpen: boolean
}>({
    getItemProps: () => ({
    }),
    activeIndex: null,
    setActiveIndex: () => {
    },
    setHasFocusInside: () => {
    },
    isOpen: false
});

export default MenuContext