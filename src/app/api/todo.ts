const BASE_URL = 'https://assignment-todolist-api.vercel.app/api'

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
  const response = await fetch(`${BASE_URL}/wan/items`)
  if (!response.ok) {
    throw new Error('Failed to fetch items')
  }
  const json = await response.json()
  return json
}

export async function getItem(itemId: number) {
  const response = await fetch(`${BASE_URL}/wan/items/${itemId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch item')
  }
  const json = await response.json()
  return json
}

export async function postItems(todo: string) {
  const response = await fetch(`${BASE_URL}/wan/items`, {
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

export async function patchItem(itemId: number, updatedData: Partial<Todo>) {
  const response = await fetch(`${BASE_URL}/wan/items/${itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })

  if (!response.ok) {
    throw new Error('Failed to patch item')
  }
  const json = await response.json()
  return json
}

export async function deleteItem(itemId: number) {
  const response = await fetch(`${BASE_URL}/wan/items/${itemId}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete item')
  }

  return response.json()
}
