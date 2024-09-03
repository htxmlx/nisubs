'use server'
import prisma from '@/lib/prisma'
import type { User } from '@prisma/client'

type UserCreateInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>
export async function createUser(data: UserCreateInput) {
  try {
    const newUser = await prisma.user.create({
      data: data,
    })

    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    console.log(error)
  }
}
