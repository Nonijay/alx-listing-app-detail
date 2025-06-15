interface PillProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  const Pill: React.FC<PillProps> = ({ label, isActive, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-full border ${
          isActive ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default Pill;