// db.ts
import { Dexie, type EntityTable } from "dexie"

interface Friend {
  id: number
  name: string
  age: number
}

interface Seminar {
    id: string
    url: string
    title: string
    description: string
    date: Date
}

const db = new Dexie("FriendsDatabase") as Dexie & {
  friends: EntityTable<
    Friend,
    "id" // primary key "id" (for the typings only)
  >,
  seminar: EntityTable<
  Seminar,
  "id"
  >
}

// Schema declaration:
db.version(1).stores({
  friends: "++id, name, age", // primary key "id" (for the runtime!)
  seminar: "id, url, title, description, date"
})

export type { Friend, Seminar }
export { db }
