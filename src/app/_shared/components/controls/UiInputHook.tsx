/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const UiInputHook = (props: IProps) => {
    const {
        label,
        fieldName,
        value,
        valueChange,
        type = "text",
        showDisplayValue = false,
        register,
        errors = {},
        min = "",
        isCompleteReactHookForm = false,
        isReadonly = false,
    } = props;
    // console.log('errors==123==', errors)
    return (
        <div className="vform-group">
            {label && (
                <label  className="vform-label">
                    {label}
                </label>
            )}

            {/* <div className="form-control-display ">{value}</div> */}

            <input
                type={type}
                className="vform-control"
                {...register(fieldName,{required:true})}
            />

            {errors &&
                errors[fieldName] &&
                errors[fieldName]?.type === "required" && (
                    <div className="text-danger my-1 text-xs">{`${label} is Required`}</div>
                )}
        </div>
    );
};

interface IProps {
    label?: any;
    fieldName: any;
    value?: any;
    valueChange?: any;
    type?: any;
    showDisplayValue?: any;
    register?: any;
    errors?: any;
    min?: any;
    isCompleteReactHookForm?: boolean;
    isReadonly?: boolean;
}

export default UiInputHook;
