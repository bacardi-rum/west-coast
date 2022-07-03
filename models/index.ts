export type Article = {
  _id: string,
  title: string,
  digest: string,
  likes: number,
  comments: number,
  coverUrl: string
  coverId: string,
  category: 'technology' | 'life' | 'work' | 'travel'
  created: Date,
  updated: Date,
  deleted: boolean
}

export type User = {
  _id: string,
  username: string,
  avatar: string,
  email: string,
  signature: string,
  root: boolean
}
