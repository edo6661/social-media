import * as z from "zod";

export const AuthSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  username: z.string().min(3, {
    message: "Username must be at least 3 characters",
  }),
});
export const AuthSchemaRegister = AuthSchema.extend({
  email: z
    .string()
    .min(3, {
      message: "Email must be at least 3 characters",
    })
    .email({
      message: "Invalid email",
    }),
});

export const getAuthSchema = (isInRegister: boolean) => {
  return isInRegister ? AuthSchemaRegister : AuthSchema;
};

export type DataAuthSchema = z.infer<typeof AuthSchemaRegister>;
