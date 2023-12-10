import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const guestSchema = z.object({
  name: z.string(),
  email: z.string(),
  type: z.string(),
  amount: z.number(),
  status: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type Guest = z.infer<typeof guestSchema>
