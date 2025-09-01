interface SectionProps {
  className?: string;
  backgroundColor?: 'white' | 'light' | 'dark';
  padding?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ 
  className = '', 
  backgroundColor = 'white', 
  padding = 'large',
  children 
}) => {
  const sectionClasses = [
    'section',
    `section--bg-${backgroundColor}`,
    `section--padding-${padding}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses}>
      <div className="section__container">
        {children}
      </div>
    </section>
  );
};

export default Section;