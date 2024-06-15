export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-950 text-md font-bold` + className}>
            {value ? value : children}
        </label>
    );
}
