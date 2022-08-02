import slugify from "slugify"

export function slugifyString(input: string): string {
  const slug = slugify(input, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: true,
    locale: "vi",
    trim: true,
  })

  return slug
}
