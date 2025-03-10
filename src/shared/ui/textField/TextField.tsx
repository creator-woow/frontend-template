import { forwardRef, useId } from 'react';

import {
  FormControl,
  InformationText,
  Input,
  InputProps,
  TextArea,
} from 'shared/ui';

export interface TextFieldProps extends InputProps {
  label?: string;
  helperText?: string;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      helperText,
      label,
      multiline,
      minRows,
      maxRows,
      id: idProp,
      ...otherProps
    },
    ref,
  ) => {
    const innerId = useId();
    const id = idProp ?? innerId;

    return (
      <div className={className}>
        <FormControl {...otherProps}>
          {label && (
            <label
              className="text-secondary font-medium mb-[5px] ml-[2px] cursor-pointer"
              htmlFor={id}
            >
              {label}
            </label>
          )}
          {multiline ? (
            <TextArea
              {...otherProps}
              ref={ref}
              id={id}
              minRows={minRows}
              maxRows={maxRows}
            />
          ) : (
            <Input
              {...otherProps}
              ref={ref}
              id={id}
            />
          )}
          {helperText && (
            <InformationText
              className="mt-1"
              error={otherProps.error}
            >
              {helperText}
            </InformationText>
          )}
        </FormControl>
      </div>
    );
  },
);

TextField.displayName = 'TextField';
