import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-indigo-600">Next.js App</h1>
            <div className="flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/dashboard">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About This Application</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ Next.js 14 with App Router</li>
            <li>✅ TypeScript for type safety</li>
            <li>✅ Tailwind CSS for styling</li>
            <li>✅ API Routes for backend functionality</li>
            <li>✅ Reusable UI components</li>
            <li>✅ Responsive design</li>
            <li>✅ SEO optimized</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h3 className="text-2xl font-semibold mb-4">Technology Stack</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <ul className="space-y-1">
                <li>• React 18</li>
                <li>• Next.js 14</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Backend</h4>
              <ul className="space-y-1">
                <li>• API Routes</li>
                <li>• Server Components</li>
                <li>• Route Handlers</li>
              </ul>
            </div>
          </div>
        </div>

        <Link href="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    </main>
  )
}
