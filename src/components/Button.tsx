import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  text: string;
  link: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  link, 
  variant = 'primary', 
  className = '', 
  onClick 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (link && link !== '#') {
      navigate(link);
    }
  };

  return (
    <button 
      className={`btn btn--${variant} ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;