export const validPassword = () => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
    document.getElementById("password").value
  )
}
