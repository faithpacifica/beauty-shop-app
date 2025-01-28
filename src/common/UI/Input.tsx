// import React, { FC } from 'react';

// interface InputProps {
//   label: string;
//   type?: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   id?: string;
//   name?: string;
//   placeholder?: string;
//   required?: boolean;
//   className?: string;
// }

// const Input: FC<InputProps> = ({
//   label,
//   type = 'text',
//   value,
//   onChange,
//   id,
//   name,
//   placeholder,
//   required = false,
//   className = '',
// }) => {
//   return (
//     <div className="mb-4">
//       <label htmlFor={id} className="block text-sm font-medium text-gray-700">
//         {label}
//       </label>
//       <input
//         type={type}
//         id={id}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required={required}
//         className={`w-full px-4 py-2 mt-1 border !bg-[#F9F9F9] border-gray-300 rounded-md focus:border-[#23856D] ${className}`}
//       />
//       {/* TODO:bir hil classlani qoldirsh */}
//     </div>
//   );
// };

// export default Input;

