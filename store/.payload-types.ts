export type Register = {
  username: string,
  password: string,
  email: string,
  website: string,
  callback: (status: boolean, msg?: string) => void
}

export type Login = { [P in Exclude<keyof Register, 'email' | 'website'>]: Register[P] }

export type Existed = { username: string }

export type Signature = { _id: string, signature: string, callback: Register['callback'] }
