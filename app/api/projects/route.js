import { projects } from '@/data/projects'

export async function GET() {
  // Simulate a brief delay to show loading state in the UI
  await new Promise((r) => setTimeout(r, 300))

  return Response.json(projects)
}
