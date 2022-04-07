import { object, string, TypeOf } from "zod";

export const createSessionSchema = object({
    body: object({
        email: string({
            required_error: "Email is required",
        }).email("Not a valid email"),
        password: string({
            required_error: "Password is required",
        }).min(6, "Password too short - should be 6 chars minimum"),
    }),
});

export type CreateSessionInput = Omit<TypeOf<typeof createSessionSchema>, "body.passwordConfirmation">;