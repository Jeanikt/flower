import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
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
                'border-white text-gray-900 bg-gray-300 focus:border-purple-300 ring-purple-300 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        />
    );
});
