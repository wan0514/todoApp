const URL = 'https://assignment-todolist-api.vercel.app/api/wan/items'

interface Todo {
  id: number
  tenantId: string
  name: string
  memo: string
  imageUrl: string
  isCompleted: boolean
}

type Todos = Todo[]

export async function getItems(): Promise<Todos> {
  const response = await fetch(URL)
  if (!response.ok) {
    throw new Error('Failed to fetch items')
  }
  const json = await response.json()
  return json
}

export async function postItems(todo: string) {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: todo }),
  })

  if (!response.ok) {
    throw new Error('Failed to post item')
  }

  const json = await response.json()
  return json
}
