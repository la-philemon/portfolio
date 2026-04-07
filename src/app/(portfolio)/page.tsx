import { client } from '@/sanity/lib/client'
import { 
  profileQuery, 
  skillsQuery, 
  experienceQuery, 
  projectsQuery,
  testimonialsQuery
} from '@/sanity/lib/queries'
import { HeroSection } from '../components/sections/HeroSection' 
import { AboutSection } from '../components/sections/AboutSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { ContactSection } from '../components/sections/ContactSection'
import { PortfolioInteractive } from '../components/PortfolioInteractive'
import { ThemeToggle } from '../components/ThemeToggle'

async function getData() {
  try {
    // Check if Sanity is configured
    if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === 'demo-project') {
      console.log('Sanity not configured - returning demo data')
      return { 
        profile: {
          name: 'Your Name',
          title: 'Full Stack Developer',
          taglines: ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver'],
          email: 'your.email@example.com',
          location: 'Your Location',
        }, 
        skills: [], 
        experience: [], 
        projects: [], 
        testimonials: [] 
      }
    }

    const [profile, skills, experience, projects, testimonials] = await Promise.all([
      client.fetch(profileQuery),
      client.fetch(skillsQuery),
      client.fetch(experienceQuery),
      client.fetch(projectsQuery),
      client.fetch(testimonialsQuery),
    ])

    return { profile, skills, experience, projects, testimonials }
  } catch (error) {
    console.error('Error fetching data:', error)
    return { 
      profile: {
        name: 'Your Name',
        title: 'Full Stack Developer',
        taglines: ['Full Stack Developer', 'AI Enthusiast', 'Problem Solver'],
        email: 'your.email@example.com',
        location: 'Your Location',
      }, 
      skills: [], 
      experience: [], 
      projects: [], 
      testimonials: [] 
    }
  }
}

export default async function Home() {
  const { profile, skills, experience, projects, testimonials } = await getData()

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <HeroSection profile={profile} />

      {/* About Section */}
      <AboutSection profile={profile} />

      {/* Skills Section */}
      {skills.length > 0 && <SkillsSection skills={skills} />}

      {/* Experience Section */}
      {experience.length > 0 && <ExperienceSection experience={experience} />}

      {/* Projects Section */}
      {projects.length > 0 && <ProjectsSection projects={projects} />}

      {/* Testimonials Section */}
      {testimonials.length > 0 && <TestimonialsSection testimonials={testimonials} />}

      {/* Contact Section */}
      <ContactSection profile={profile} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {profile?.name || 'Your Name'}. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Powered by Next.js, Sanity & OpenAI
          </p>
        </div>
      </footer>

      {/* Floating Dock & AI Twin */}
      <PortfolioInteractive profile={profile} />
    </main>
  )
}
