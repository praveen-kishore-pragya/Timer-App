function Button({text, color, onClick}){
    const colorClasses = {
        green: 'bg-green-500 hover:bg-green-600 text-white',
        gray: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
        orange: 'bg-red-500 hover:bg-red-600 text-white',
      };
    
      return (
        <button
          className={`px-4 py-2 border-2 rounded-2xl font-bold ${colorClasses[color]}`} onClick={onClick}>
          {text}
        </button>
      );
    }

export default Button