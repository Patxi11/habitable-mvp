# Habitable MVP - Sustainable Urban Development Platform

Habitable is a platform focused on aligning key actors in urban housing development—such as architects, developers, investors, and cities—around investable, sustainable, and resilient projects in overlooked urban areas.

## 🏗️ Project Overview

This MVP focuses on the pre-development stage of real estate projects, aiming to:
- Redirect development toward high-impact sites
- Align stakeholders early in the process
- De-risk projects through structured collaboration
- Connect public and private sector actors

## ✨ Features

### Core MVP Features
- **Project Discovery**: Browse curated Ready to Develop Projects (RDPs)
- **Interest Expression**: Multiple ways to engage with projects (invest, develop, collaborate, live, bring to city)
- **Project Submission**: Landowners and cities can submit sites for review
- **Dual User Types**: 
  - **Participate**: Architects, developers, investors, buyers
  - **Promote**: Cities and landowners

### User Experience
- Clean, trustworthy modern UI
- Responsive design for all devices
- Intuitive navigation and project filtering
- Comprehensive project submission workflow

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
habitable-mvp/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   ├── projects/          # Project exploration
│   ├── signup/            # User registration
│   ├── login/             # User authentication
│   └── submit/            # Project submission
├── components/            # Reusable UI components
│   ├── Navigation.tsx     # Main navigation component
│   └── ProjectCard.tsx    # Project display component
├── public/               # Static assets
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone and install dependencies**:
```bash
git clone <repository-url>
cd habitable-mvp
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Design System

The application uses a custom design system built on Tailwind CSS:

### Colors
- **Primary**: Blue tones for main actions and branding
- **Secondary**: Gray tones for neutral elements
- **Accent**: Green tones for positive actions and sustainability

### Components
- **Buttons**: `.btn-primary`, `.btn-secondary`, `.btn-accent`
- **Cards**: `.card` for content containers
- **Forms**: `.input-field` for consistent form styling

## 📊 Recommended Backend Architecture

### Database Schema (Supabase/PostgreSQL)

#### Core Tables
```sql
-- Users table
users (
  id UUID PRIMARY KEY,
  email VARCHAR UNIQUE,
  user_type VARCHAR CHECK (user_type IN ('participate', 'promote')),
  first_name VARCHAR,
  last_name VARCHAR,
  organization VARCHAR,
  role VARCHAR,
  location VARCHAR,
  interests TEXT[],
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Projects table
projects (
  id UUID PRIMARY KEY,
  title VARCHAR,
  location VARCHAR,
  description TEXT,
  project_type VARCHAR,
  investment_range VARCHAR,
  timeline VARCHAR,
  stakeholders_needed TEXT[],
  tags TEXT[],
  status VARCHAR DEFAULT 'under_review',
  submitter_id UUID REFERENCES users(id),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Project interest expressions
project_interests (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  user_id UUID REFERENCES users(id),
  interest_type VARCHAR,
  message TEXT,
  created_at TIMESTAMP
)

-- Project files/documents
project_files (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  file_name VARCHAR,
  file_url VARCHAR,
  file_type VARCHAR,
  uploaded_at TIMESTAMP
)
```

### API Endpoints

#### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

#### Projects
- `GET /api/projects` - List projects with filtering
- `GET /api/projects/:id` - Get project details
- `POST /api/projects` - Submit new project
- `PUT /api/projects/:id` - Update project (admin only)

#### User Interactions
- `POST /api/projects/:id/interest` - Express interest in project
- `GET /api/users/interests` - Get user's expressed interests
- `PUT /api/users/profile` - Update user profile

### Integration Recommendations

#### Supabase Setup
1. **Authentication**: Use Supabase Auth for user management
2. **Database**: PostgreSQL with Row Level Security (RLS)
3. **Storage**: Supabase Storage for project files/images
4. **Real-time**: Supabase subscriptions for live updates

#### External Services
- **Email**: SendGrid or Resend for transactional emails
- **Maps**: Mapbox or Google Maps for location services
- **Analytics**: Mixpanel or PostHog for user behavior tracking

## 🔐 Security Considerations

- Row Level Security (RLS) policies for data access
- Input validation and sanitization
- File upload restrictions and scanning
- Rate limiting for API endpoints
- HTTPS enforcement in production

## 📈 Future Enhancements

### Phase 2 Features
- Real-time messaging between stakeholders
- Document collaboration workspace
- Financial modeling tools
- Impact metrics dashboard
- Mobile app development

### Scalability Considerations
- CDN for static assets
- Database indexing optimization
- Caching layer (Redis)
- Background job processing
- API rate limiting and monitoring

## 🤝 Contributing

This is an MVP scaffold designed for rapid iteration. Key areas for enhancement:
- User authentication integration
- Backend API implementation
- Advanced filtering and search
- Real-time collaboration features
- Mobile responsiveness improvements

## 📄 License

[Add your license information here]

---

Built with ❤️ for sustainable urban development
