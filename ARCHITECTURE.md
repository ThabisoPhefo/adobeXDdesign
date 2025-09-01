# Project Architecture

## 🏗️ Refactored Codebase Structure

This document outlines the professional refactoring of the codebase following React and TypeScript best practices.

## 📁 Folder Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Generic, reusable components
│   │   ├── Button/      # Button component with variants
│   │   ├── Section/     # Layout wrapper component
│   │   └── index.ts     # Barrel exports
│   ├── home/            # Home page specific components
│   │   ├── ContentSection/
│   │   ├── HeroOverlay/
│   │   ├── InfoSection/
│   │   └── index.ts
│   ├── Carousel/        # Existing carousel component
│   └── Footer/          # Existing footer component
├── data/                # Static data files
│   ├── home.json        # Home page content
│   ├── about.json       # About page content
│   └── contact.json     # Contact page content
├── hooks/               # Custom React hooks
│   └── useHomeData.ts   # Data loading hook
├── pages/               # Page components
│   ├── Home.tsx         # Refactored home page
│   ├── AboutUs.tsx      # About page
│   └── ContactUs.tsx    # Contact page
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared interfaces
├── utils/               # Utility functions and constants
│   └── constants.ts     # App-wide constants
└── assets/              # Static assets
    └── resources/       # Images and icons
```

## 🧩 Component Architecture

### 1. **Common Components**
- **Button**: Reusable button with multiple variants (primary, secondary, outline)
- **Section**: Layout wrapper with consistent spacing and container management

### 2. **Home Page Components**
- **ContentSection**: Text/image layout with features list
- **HeroOverlay**: Background image with overlay card
- **InfoSection**: Multi-column informational content

### 3. **Data Layer**
- Centralized data management in JSON files
- Type-safe data loading with custom hooks
- Separation of content from presentation logic

## 🎯 Key Improvements

### 1. **Separation of Concerns**
- ✅ Content data separated from components
- ✅ Reusable components for common patterns
- ✅ Type safety with TypeScript interfaces
- ✅ Consistent styling patterns

### 2. **Maintainability**
- ✅ Modular component structure
- ✅ Centralized constants and utilities
- ✅ Clear file organization
- ✅ Barrel exports for clean imports

### 3. **Scalability**
- ✅ Easy to add new page sections
- ✅ Reusable component library
- ✅ Consistent design system
- ✅ Type-safe development

### 4. **Developer Experience**
- ✅ Clear component hierarchy
- ✅ Predictable file locations
- ✅ Type autocomplete and validation
- ✅ Easy content updates via JSON

## 🔧 Usage Examples

### Adding New Content
```json
// In data/home.json
{
  "newSection": {
    "title": "New Section Title",
    "description": "Section description",
    "ctaText": "Click Here",
    "ctaLink": "/new-page"
  }
}
```

### Creating New Components
```tsx
// components/common/NewComponent.tsx
import { Section } from '../common';
import './NewComponent.css';

interface NewComponentProps {
  data: SectionData;
}

const NewComponent: React.FC<NewComponentProps> = ({ data }) => {
  return (
    <Section backgroundColor="light">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </Section>
  );
};

export default NewComponent;
```

### Using Button Variants
```tsx
<Button text="Primary Action" link="/action" variant="primary" />
<Button text="Secondary Action" link="/action" variant="secondary" />
<Button text="Outline Action" link="/action" variant="outline" />
```

## 🎨 Styling Strategy

1. **Component-Scoped CSS**: Each component has its own CSS file
2. **Consistent Spacing**: Using Section component for layout
3. **Responsive Design**: Mobile-first approach in all components
4. **Design Tokens**: Colors and constants centralized in utils

## 🚀 Benefits

1. **Easier Maintenance**: Components are self-contained and focused
2. **Better Testing**: Isolated components are easier to test
3. **Content Management**: Non-developers can update content via JSON
4. **Consistent UI**: Reusable components ensure design consistency
5. **Type Safety**: TypeScript prevents runtime errors
6. **Better Performance**: Optimized component structure and imports
