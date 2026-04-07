import { NextResponse } from 'next/server'

// Mock database
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com' },
]

// GET /api/users/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  const user = users.find((u) => u.id === id)

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(user)
}

// DELETE /api/users/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id)
  const userIndex = users.findIndex((u) => u.id === id)

  if (userIndex === -1) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }

  users.splice(userIndex, 1)

  return NextResponse.json(
    { message: 'User deleted successfully' },
    { status: 200 }
  )
}
