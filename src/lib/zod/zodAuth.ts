import * as z from "zod";

export const AuthSchema = z.object({
  password: z.string().min(8),
  username: z.string().min(3),
});
export const AuthSchemaRegister = AuthSchema.extend({
  email: z.string().email(),
});

export const getAuthSchema = (isInRegister: boolean) => {
  return isInRegister ? AuthSchemaRegister : AuthSchema;
};

export type DataAuthSchema = z.infer<typeof AuthSchemaRegister>;
