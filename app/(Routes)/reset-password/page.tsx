"use client";

import FormBox from "@/components/Routes/FormBox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const isLoading = false;
  const session = false;
  const onSubmit = (data: TAuthCredentialsValidator) => console.log(data);

  return (
    <FormBox heading="Enter your new password">
      {errors?.mobile && (
        <p className="text-sm text-red-500 max-w-60 mt-1">
          Response Error Goes Here
        </p>
      )}
      <form className="p-5 max-w-[370px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          {session && (
            <div className="grid gap-1 w-60 py-2">
              <Label htmlFor="oldPassword">Old Password</Label>
              <Input
                {...register("password")}
                type="password"
                className="border-b border-black w-full"
              />
              {errors?.password && (
                <p className="text-sm text-red-500 max-w-60">
                  {errors.password.message}
                </p>
              )}
            </div>
          )}
          <div className="grid gap-1 w-60 py-2">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              type="password"
              className="border-b border-black w-full"
            />
            {errors?.password && (
              <p className="text-sm text-red-500 max-w-60">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="grid gap-1 w-60 py-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              {...register("confirmPassword")}
              type="password"
              className="border-b border-black w-full"
            />
            {errors?.confirmPassword && (
              <p className="text-sm text-red-500 max-w-60">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="rounded-lg border-none mt-1 text-center w-full "
          >
            Change password
          </Button>
        </div>
      </form>
    </FormBox>
  );
};

export default Page;
