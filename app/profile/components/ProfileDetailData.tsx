import { useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/LabeledTextField"
import { FormSignUp, FORM_ERROR } from "app/core/components/FormSignUp"

import { ProfileDetail, Signup } from "app/auth/validations"
import FormProfile from "./FormProfile"
import profiledetaildata from "../queries/profiledetaildata"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

type ProfileFormProps = {
  onSuccess?: () => void
}

export const ProfileForm = (props: ProfileFormProps) => {
  const currentUser = useCurrentUser()
  const [profiledetailMutation] = useMutation(profiledetaildata)
  if (currentUser) {
    return (
      <>
        <FormProfile
          submitText="Create Account"
          schema={ProfileDetail}
          initialValues={{ name: "", email: "", fname: "", lname: "" }}
          onSubmit={async (values) => {
            try {
              await profiledetailMutation(values)
              props.onSuccess?.()
            } catch (error: any) {
              if (error.code === "P2002" && error.meta?.target?.includes("email")) {
                // This error comes from Prisma
                return { email: "This email is already being used" }
              } else {
                return { [FORM_ERROR]: error.toString() }
              }
            }
          }}
        >
          <LabeledTextField name="name" label="Name" placeholder="Name" />
          <LabeledTextField name="email" label="Email" placeholder="Email" />
          <LabeledTextField name="fname" label="First Name" placeholder="Le" />
          <LabeledTextField name="lname" label="Last Name" placeholder="Nhat Quynh" />
        </FormProfile>
      </>
    )
  } else {
    return (
      <>
        <h1>hihi</h1>
      </>
    )
  }
}

export default ProfileForm
