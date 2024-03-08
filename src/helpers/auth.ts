export const requestPath = (isInRegister: boolean) => {
  return isInRegister ? "/auth/register" : "/auth/login";
};

export const optionalToast = (isInRegister: boolean) => {
  return isInRegister ? "Succesfully registered" : "Succesfully login";
};

export const errorsAuth = (errors: any) => {
  const errStyle = "border border-primaryRed  ";
  const errorsUsername = errors.username ? errStyle : "";
  const errorsPassword = errors.password ? errStyle : "";
  const errorsEmail = errors.email ? errStyle : "";
  return { errorsUsername, errorsPassword, errorsEmail };
};
