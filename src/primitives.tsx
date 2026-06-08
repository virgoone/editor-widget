import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "default" | "secondary" | "ghost" | "outline" | "destructive";
  size?: "sm" | "default" | "icon";
};

export function Button({ className, variant = "default", size = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cx("bwe-button", `bwe-button-${variant}`, `bwe-button-${size}`, className)}
      type="button"
      {...props}
    />
  );
}

type SelectProps = ComponentPropsWithoutRef<"select"> & {
  label?: ReactNode;
};

export function Select({ className, label, children, ...props }: SelectProps) {
  return (
    <label className="bwe-field">
      {label ? <span className="bwe-field-label">{label}</span> : null}
      <select className={cx("bwe-select", className)} {...props}>
        {children}
      </select>
    </label>
  );
}

type TextareaProps = ComponentPropsWithoutRef<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, ...props },
  ref
) {
  return <textarea ref={ref} className={cx("bwe-textarea", className)} {...props} />;
});

type BadgeProps = ComponentPropsWithoutRef<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return <span className={cx("bwe-badge", className)} {...props} />;
}
