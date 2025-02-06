import PropTypes from "prop-types";

export default function InputForm({ name, type, inputId, autocomplete, onChange, value, disabled, className, placeHolder, required, ariaLabel }) {

    return (
        <>
            <input
                name={name}
                type={type}
                id={inputId}
                autoComplete={autocomplete}
                onChange={onChange}
                value={value}
                disabled={disabled}
                className={className}
                placeholder={placeHolder}
                required={required}
                aria-labelledby={ariaLabel}
            />
        </>
    );
}

InputForm.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    inputId: PropTypes.string,
    autocomplete: PropTypes.string,
    onChange: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    placeHolder: PropTypes.string,
    ariaLabel: PropTypes.string,
    disabled: PropTypes.string,
    required: PropTypes.string,
};
