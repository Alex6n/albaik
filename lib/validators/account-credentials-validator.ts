import { z } from "zod";

const mobileRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const AuthCredentialsValidator = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters long",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters long",
  }),
  mobile: z.string().regex(mobileRegex, "Invalid Phone Number"),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
