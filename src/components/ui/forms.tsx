import classnames from "classnames";
import React, { InputHTMLAttributes, LabelHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import Txt, { TxtSize } from "~/components/ui/txt";

interface FieldProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: ReactNode;
  subText?: string;
}

export function Field(props: FieldProps) {
  const { label, subText, className, children, ...attributes } = props;

  return (
    <label {...attributes} className={classnames("flex justify-between items-center ph1 h2", className)}>
      <div className="flex flex-column">
        <Txt size={TxtSize.MEDIUM} value={label} />
        {subText && <Txt className="lavender" size={TxtSize.SMALL} value={subText} />}
      </div>
      {children}
    </label>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function TextInput(props: InputProps) {
  const { className, ...attributes } = props;

  return <input className={classnames("h2 pa2 ba br2 b--yellow", className)} type="text" {...attributes} />;
}

export function Checkbox(props: InputProps) {
  const { className, ...attributes } = props;

  return <input className={classnames("w1 h1", className)} type="checkbox" {...attributes} />;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { [value: string]: ReactNode };
  outlined?: boolean;
  formatter?: (value: string) => string;
}

export function Select(props: SelectProps) {
  const { options, outlined, className, formatter, ...attributes } = props;

  return (
    <select
      className={classnames("h2 br2 ba b--white pl2", className, {
        "bg-transparent bw0 white outline-0": outlined,
      })}
      style={{
        ...(outlined && {
          WebkitAppearance: "none",
          MozAppearance: "none",
          textIndent: "1px",
          textOverflow: "",
        }),
      }}
      {...attributes}
    >
      {Object.keys(options).map((value) => (
        <option key={value} className="black" value={value}>
          {formatter ? formatter(options[value] as string) : options[value]}
        </option>
      ))}
    </select>
  );
}
