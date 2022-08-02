import { resolver, SecurePassword } from "blitz"
import db from "db"
import { ProfileDetail } from "app/auth/validations"
import { Role } from "types"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
// const currentUser = useCurrentUser()
export default resolver.pipe(
  resolver.zod(ProfileDetail),
  async ({ name, email, fname, lname }, ctx) => {
    const user = await db.user.update({
      where: { id: 1 },
      data: { name: name.trim(), email: email.trim(), fname: fname.trim(), lname: lname.trim() },
    })

    await ctx.session.$create({ userId: user.id, role: user.role as Role })
    return user
  }
)
