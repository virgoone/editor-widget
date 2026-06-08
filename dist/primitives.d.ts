import { type ComponentPropsWithoutRef, type ReactNode } from "react";
type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    variant?: "default" | "secondary" | "ghost" | "outline" | "destructive";
    size?: "sm" | "default" | "icon";
};
export declare function Button({ className, variant, size, ...props }: ButtonProps): import("react").JSX.Element;
type SelectProps = ComponentPropsWithoutRef<"select"> & {
    label?: ReactNode;
};
export declare function Select({ className, label, children, ...props }: SelectProps): import("react").JSX.Element;
export declare const Textarea: import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & import("react").RefAttributes<HTMLTextAreaElement>>;
type BadgeProps = ComponentPropsWithoutRef<"span">;
export declare function Badge({ className, ...props }: BadgeProps): import("react").JSX.Element;
export {};
