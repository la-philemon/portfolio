import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'
import { client } from '@/sanity/lib/client'
import { 
  profileQuery, 
  skillsQuery, 
  experienceQuery, 
  educationQuery,
  projectsQuery,
  certificationsQuery,
  awardsQuery,
  servicesQuery
} from '@/sanity/lib/queries'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export const runtime = 'edge'

async function getPortfolioContext() {
  try {
    const [profile, skills, experience, education, projects, certifications, awards, services] = 
      await Promise.all([
        client.fetch(profileQuery),
        client.fetch(skillsQuery),
        client.fetch(experienceQuery),
        client.fetch(educationQuery),
        client.fetch(projectsQuery),
        client.fetch(certificationsQuery),
        client.fetch(awardsQuery),
        client.fetch(servicesQuery),
      ])

    return {
      profile,
      skills,
      experience,
      education,
      projects,
      certifications,
      awards,
      services,
    }
  } catch (error) {
    console.error('Error fetching portfolio context:', error)
    return null
  }
}

function createSystemPrompt(portfolioData: any, personality: string = 'clear') {
  const personalityModes = {
    crisp: 'Be concise and factual. Keep responses brief and professional.',
    clear: 'Be focused and helpful. Provide balanced, informative responses.',
    chatty: 'Be conversational and friendly. Engage warmly while being informative.',
  }

  const mode = personalityModes[personality as keyof typeof personalityModes] || personalityModes.clear

  return `You are ${portfolioData.profile?.name || 'a professional'}'s AI Twin - a digital clone that represents them to visitors.

PERSONALITY: ${mode}

CONTEXT ABOUT ${portfolioData.profile?.name || 'this person'}:
- Role: ${portfolioData.profile?.title || 'Professional'}
- Bio: ${portfolioData.profile?.bio ? JSON.stringify(portfolioData.profile.bio) : 'Not provided'}
- Location: ${portfolioData.profile?.location || 'Not specified'}
- Email: ${portfolioData.profile?.email || 'Not provided'}

SKILLS: ${portfolioData.skills?.map((s: any) => `${s.name} (${s.category}, ${s.level}% proficiency)`).join(', ') || 'None listed'}

EXPERIENCE: ${portfolioData.experience?.map((e: any) => 
  `${e.position} at ${e.company} (${e.startDate} - ${e.current ? 'Present' : e.endDate})`
).join('; ') || 'None listed'}

EDUCATION: ${portfolioData.education?.map((e: any) => 
  `${e.degree} in ${e.field} from ${e.school}`
).join('; ') || 'None listed'}

PROJECTS: ${portfolioData.projects?.slice(0, 5).map((p: any) => 
  `"${p.title}" - ${p.description}`
).join('; ') || 'None listed'}

CERTIFICATIONS: ${portfolioData.certifications?.map((c: any) => 
  `${c.name} by ${c.issuer}`
).join(', ') || 'None listed'}

AWARDS: ${portfolioData.awards?.map((a: any) => 
  `${a.title} from ${a.issuer}`
).join(', ') || 'None listed'}

SERVICES OFFERED: ${portfolioData.services?.map((s: any) => s.title).join(', ') || 'None listed'}

INSTRUCTIONS:
- Introduce yourself as ${portfolioData.profile?.name}'s AI Twin
- Answer questions about their background, skills, experience, projects, and services
- Be helpful and informative while maintaining the specified personality
- If you don't know something, be honest and suggest contacting them directly
- Keep responses natural and conversational
- Reference specific projects, skills, or experiences when relevant`
}

export async function POST(req: Request) {
  try {
    const { messages, personality = 'clear' } = await req.json()

    // Fetch portfolio data for context
    const portfolioData = await getPortfolioContext()

    if (!portfolioData) {
      return new Response('Failed to load portfolio data', { status: 500 })
    }

    // Create system prompt with portfolio context
    const systemPrompt = createSystemPrompt(portfolioData, personality)

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      stream: true,
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        ...messages,
      ],
      temperature: personality === 'chatty' ? 0.8 : personality === 'crisp' ? 0.3 : 0.5,
      max_tokens: personality === 'crisp' ? 150 : 500,
    })

    // Convert the response to a friendly text-stream
    const stream = OpenAIStream(response)

    // Respond with the stream
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
