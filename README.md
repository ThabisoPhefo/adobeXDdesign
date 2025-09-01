# AVAMAE Company Website

A modern, responsive company website built with React, TypeScript, and Vite. This application showcases AVAMAE's services and provides contact functionality with a professional, clean design.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Form**: Functional contact form with API integration
- **Authentication Pages**: Sign-in, Sign-up, and Forgot Password pages
- **Image Optimization**: Lazy loading for improved performance
- **Accessibility**: Proper semantic HTML and keyboard navigation
- **TypeScript**: Full type safety throughout the application

## 📱 Pages

- **Home**: Hero section with carousel and company information
- **About Us**: Detailed company information and values
- **Contact Us**: Contact form with address details option
- **Sign In**: User authentication form
- **Sign Up**: User registration form
- **Forgot Password**: Password reset functionality

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Language**: TypeScript
- **Bundler**: Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: CSS with SASS support
- **Linting**: ESLint

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd adobeXDdesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Button.tsx
│   ├── Carousel.tsx
│   ├── Footer.tsx
│   ├── LazyImage.tsx
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx
│   ├── AboutUs.tsx
│   ├── ContactUs.tsx
│   ├── SignIn.tsx
│   ├── SignUp.tsx
│   └── ForgotPassword.tsx
├── data/               # JSON data files
│   ├── home.json
│   ├── about.json
│   ├── contact.json
│   └── ...
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── assets/             # Static assets (images, icons)
```

## 🎨 Styling

- **External CSS**: All styles are in external stylesheets (no inline styles)
- **SASS Support**: SASS is available for advanced styling features
- **Responsive Design**: Mobile-first approach with breakpoints
- **CSS Variables**: Consistent theming with CSS custom properties

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

The contact form integrates with the AVAMAE API:
- **Endpoint**: `https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit`
- **Method**: POST
- **Format**: JSON

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Performance Features

- **Lazy Loading**: Images load only when needed
- **Code Splitting**: Automatic chunk splitting for faster loading
- **Minification**: Production builds are minified and optimized
- **Tree Shaking**: Unused code is eliminated in production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is proprietary to AVAMAE.

## 📞 Support

For questions or support, please contact AVAMAE through the contact form on the website.