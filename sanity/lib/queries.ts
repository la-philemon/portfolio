import { groq } from 'next-sanity'

// Profile queries
export const profileQuery = groq`*[_type == "profile"][0] {
  _id,
  name,
  title,
  bio,
  email,
  phone,
  location,
  image,
  resumeUrl,
  socialLinks,
  taglines,
  aiTwinPersonality,
  aiTwinGreeting,
  suggestedPrompts
}`

// Skills queries
export const skillsQuery = groq`*[_type == "skill"] | order(order asc) {
  _id,
  name,
  category,
  level,
  icon,
  order
}`

// Experience queries
export const experienceQuery = groq`*[_type == "experience"] | order(startDate desc) {
  _id,
  company,
  position,
  location,
  startDate,
  endDate,
  current,
  description,
  technologies
}`

// Education queries
export const educationQuery = groq`*[_type == "education"] | order(endDate desc) {
  _id,
  school,
  degree,
  field,
  startDate,
  endDate,
  gpa,
  description
}`

// Projects queries
export const projectsQuery = groq`*[_type == "project"] | order(featured desc, startDate desc) {
  _id,
  title,
  slug,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  featured,
  startDate,
  endDate
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  content,
  image,
  technologies,
  demoUrl,
  githubUrl,
  featured,
  startDate,
  endDate
}`

// Certifications queries
export const certificationsQuery = groq`*[_type == "certification"] | order(date desc) {
  _id,
  name,
  issuer,
  date,
  credentialId,
  credentialUrl,
  image
}`

// Awards queries
export const awardsQuery = groq`*[_type == "award"] | order(date desc) {
  _id,
  title,
  issuer,
  date,
  description
}`

// Services queries
export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  features,
  order
}`

// Testimonials queries
export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  name,
  position,
  company,
  content,
  image,
  rating
}`

// Blog posts queries
export const blogPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  author->{name, image},
  categories[]->{title, slug}
}`

export const blogPostBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  body,
  publishedAt,
  author->{name, image, bio},
  categories[]->{title, slug}
}`
