# Habitable MVP - Architecture Documentation

## Frontend File Structure & Component Layout

### Directory Structure
```
habitable-mvp/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles, Tailwind imports, custom CSS classes
│   ├── layout.tsx               # Root layout with metadata and font configuration
│   ├── page.tsx                 # Homepage with hero, features, CTA sections
│   ├── projects/
│   │   └── page.tsx             # Project exploration with search/filter functionality
│   ├── signup/
│   │   └── page.tsx             # User registration with dual user types
│   ├── login/
│   │   └── page.tsx             # Authentication with social login options
│   └── submit/
│       └── page.tsx             # Comprehensive project submission form
├── components/                   # Reusable UI components
│   ├── Navigation.tsx           # Responsive navigation with mobile menu
│   └── ProjectCard.tsx          # Project display with interest expression modal
├── public/                      # Static assets (favicon, images, etc.)
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Custom design system configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── postcss.config.js           # PostCSS configuration for Tailwind
├── README.md                   # Project documentation
└── ARCHITECTURE.md             # This file
```

## Component Architecture

### Core Components

#### Navigation.tsx
- **Purpose**: Main site navigation with responsive design
- **Features**: 
  - Mobile hamburger menu
  - Authentication state handling
  - Active link highlighting
- **Props**: None (self-contained)
- **State**: Mobile menu toggle

#### ProjectCard.tsx
- **Purpose**: Display individual project information
- **Features**:
  - Project details and metrics
  - Interest expression modal
  - Tag filtering support
  - Responsive image handling
- **Props**: 
  - `project`: Project data object
  - `onExpressInterest`: Callback function
- **State**: Modal visibility

### Page Components

#### Homepage (app/page.tsx)
- **Sections**:
  - Hero with clear value proposition
  - Feature highlights (3-column grid)
  - Dual user type CTAs
  - Footer with navigation links
- **Design**: Gradient hero, card-based features, centered CTAs

#### Projects Page (app/projects/page.tsx)
- **Features**:
  - Search functionality
  - Tag-based filtering
  - Project grid layout
  - Empty state handling
- **State Management**: Search terms, selected filters, project data

#### Signup Page (app/signup/page.tsx)
- **User Flow**:
  1. User type selection (Participate/Promote)
  2. Form with role-specific fields
  3. Interest selection checkboxes
  4. Terms acceptance
- **Conditional Rendering**: Different fields based on user type

#### Project Submission (app/submit/page.tsx)
- **Form Sections**:
  - Basic Information
  - Site Details
  - Development Vision
  - Contact Information
  - File Upload
  - Additional Information
- **Features**: Multi-step form, file handling, validation

#### Login Page (app/login/page.tsx)
- **Features**:
  - Email/password authentication
  - Social login buttons (Google, Facebook)
  - Password visibility toggle
  - Remember me option

## Design System

### Color Palette
```css
/* Primary - Blue tones for main actions */
primary-50: #f0f9ff
primary-600: #0284c7
primary-700: #0369a1

/* Secondary - Gray tones for neutral elements */
secondary-500: #64748b
secondary-700: #334155

/* Accent - Green tones for sustainability/positive actions */
accent-500: #10b981
accent-600: #059669
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)
- **Small Text**: Medium weight (500)

### Component Classes
```css
/* Buttons */
.btn-primary: Blue background, white text
.btn-secondary: White background, gray border
.btn-accent: Green background, white text

/* Layout */
.card: White background, rounded corners, shadow
.input-field: Consistent form field styling

/* Utilities */
.line-clamp-3: Text truncation after 3 lines
```

## State Management Strategy

### Current Implementation (MVP)
- **Local State**: React useState for component-level state
- **Props Drilling**: Parent-to-child data passing
- **Mock Data**: Hardcoded project data for demonstration

### Recommended Evolution
1. **Context API**: For user authentication state
2. **React Query/SWR**: For server state management
3. **Zustand/Redux**: For complex client state (future)

## Data Flow

### Project Discovery Flow
1. User visits `/projects`
2. Projects fetched from API (currently mock data)
3. Search/filter applied client-side
4. ProjectCard components render with project data
5. Interest expression triggers callback to parent

### User Registration Flow
1. User selects user type on `/signup`
2. Form fields conditionally rendered
3. Form submission triggers API call (currently alert)
4. Success redirects to dashboard (future)

### Project Submission Flow
1. Multi-section form on `/submit`
2. File upload handling (currently local state)
3. Form validation before submission
4. API call with form data and files (currently alert)

## Integration Points

### Backend Integration (Recommended)
```typescript
// API service structure
interface ApiService {
  // Authentication
  signup(userData: SignupData): Promise<User>
  login(credentials: LoginData): Promise<AuthResponse>
  
  // Projects
  getProjects(filters?: ProjectFilters): Promise<Project[]>
  submitProject(projectData: ProjectSubmission): Promise<Project>
  expressInterest(projectId: string, interestData: InterestData): Promise<void>
  
  // User management
  updateProfile(profileData: ProfileData): Promise<User>
  getUserInterests(): Promise<Interest[]>
}
```

### Supabase Integration Points
1. **Authentication**: Replace mock login with Supabase Auth
2. **Database**: Connect forms to PostgreSQL tables
3. **Storage**: File uploads to Supabase Storage
4. **Real-time**: Project updates via subscriptions

## Performance Considerations

### Current Optimizations
- Next.js App Router for optimal loading
- Tailwind CSS for minimal bundle size
- Responsive images with error handling
- Component-level code splitting

### Future Optimizations
- Image optimization with Next.js Image component
- API response caching
- Lazy loading for project lists
- Progressive Web App features

## Accessibility Features

### Current Implementation
- Semantic HTML structure
- Keyboard navigation support
- Focus management in modals
- Alt text for images
- Color contrast compliance

### Future Enhancements
- Screen reader testing
- ARIA labels for complex interactions
- Keyboard shortcuts
- High contrast mode support

## Mobile Responsiveness

### Breakpoint Strategy
- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: > 1024px (3-column grids)

### Mobile-Specific Features
- Hamburger navigation menu
- Touch-friendly button sizes
- Swipe gestures (future)
- Mobile-optimized forms

## Testing Strategy (Recommended)

### Unit Testing
- Component rendering tests
- Form validation logic
- Utility function tests

### Integration Testing
- User flow testing
- API integration tests
- Form submission workflows

### E2E Testing
- Complete user journeys
- Cross-browser compatibility
- Mobile device testing

## Deployment Considerations

### Build Process
```bash
npm run build    # Production build
npm run start    # Production server
```

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
NEXT_PUBLIC_SITE_URL=your_site_url
```

### Platform Recommendations
- **Vercel**: Optimal for Next.js deployment
- **Netlify**: Alternative with good performance
- **Railway/Render**: For full-stack deployment with backend

This architecture provides a solid foundation for the Habitable MVP while maintaining flexibility for future enhancements and scalability.
