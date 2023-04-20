import { forwardRef, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';

// TextInput.propTypes = {
//     type: PropTypes.oneOfType(['text', 'email', 'password', 'number', 'file']),
//     name: PropTypes.string,
//     isError: PropTypes.bool,
//     // etc
// } 

export default forwardRef(function TextInput({ 
    type = 'text',
    className = '', 
    isFocused = false,
    variant = 'primary',
    isError,
     ...props },
      ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && 'input-error'}  input-${variant} ${className} `
            }
            ref={input}
        />
    );
});
