import { useMutation, PromiseReturnType, AuthenticationError, useRouterQuery, Link } from "blitz"
import login from "app/auth/mutations/login"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import FormPassword, { FORM_ERROR } from "./FormPassword"
import { Login, ResetPassword } from "app/auth/validations"
import LabeledTextField from "./LabelTextFieldProfile"
import resetPassword from "app/auth/mutations/resetPassword"
import logout from "app/auth/mutations/logout"

export const PasswordForm = () => {
  const [loginMutation] = useMutation(login)
  const [logoutMutation] = useMutation(logout)

  const currentUser = useCurrentUser()
  const query = useRouterQuery()
  const [resetPasswordMutation, { isSuccess }] = useMutation(resetPassword)

  if (currentUser) {
    return (
      <>
        {isSuccess ? (
          <div>
            <h2>Password Reset Successfully</h2>
            <p>
              Go to the <Link href="/">homepage</Link>
            </p>
          </div>
        ) : (
          <FormPassword
            submitText="Change"
            schema={ResetPassword}
            initialValues={{ password: "", passwordConfirmation: "", token: query.token as string }}
            onSubmit={async (values) => {
              try {
                await resetPasswordMutation(values)
              } catch (error: any) {
                if (error.name === "ResetPasswordError") {
                  return {
                    [FORM_ERROR]: error.message,
                  }
                } else {
                  return {
                    [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
                  }
                }
              }
            }}
          >
            <LabeledTextField name="oldpass" label="Old Password" type="password" />
            <LabeledTextField name="newpass" label="New Password" type="password" />
            <LabeledTextField name="confirmpass" label="Confirm New Password" type="password" />
          </FormPassword>
        )}
      </>
    )
  } else {
    return <></>
  }
}
PasswordForm.redirectAuthenticatedTo = "/"
export default PasswordForm
