export function Dot({ color = "bg-gray-500", className = "" }) {
  return (
    <span 
      className={`inline-block w-2 h-2 rounded-full ${color} ${className}`}
    />
  );
};