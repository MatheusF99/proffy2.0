import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface tokenProps {
  id: number,
  iat: number,
  exp: number
}

export default function authMiddleware(
  req: Request, res: Response, next: NextFunction
) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.sendStatus(401)
  }

  const token = authorization.replace('bearer', '').trim()

  try {
    const data = jwt.verify(token, 'secret',)

    const { id } = data as tokenProps

    req.userId = id

    return next()

  } catch {
    return res.sendStatus(401)
  }

}