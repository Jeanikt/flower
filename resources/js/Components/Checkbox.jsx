export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-500 text-rose-500 shadow-sm focus:ring-rose-400' +
                className
            }
        />
    );
}
