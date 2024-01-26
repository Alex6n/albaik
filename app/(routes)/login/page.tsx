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
import Link from "next/link";
import PhoneInput from "@/components/Routes/PhoneInput";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

  const isLoading = false;

  const onSubmit = (data: TAuthCredentialsValidator) => console.log(data);

  return (
    <FormBox
      heading="Sign in to your account"
      linkTitle="Don't have an account?"
      linkHref="/signup"
    >
      {errors?.mobile && (
        <p className="text-sm text-red-500 max-w-60 mt-1">
          Response Error Goes Here
        </p>
      )}
      <form className="p-5 max-w-[370px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1 py-2">
            <Label htmlFor="mobile">Mobile</Label>

            <div className="flex w-60">
              <PhoneInput />
              <Input
                {...register("mobile")}
                type="number"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b border-black w-full"
              />
            </div>
            {errors?.mobile && (
              <p className="text-sm text-red-500 max-w-60">
                {errors.mobile.message}
              </p>
            )}
          </div>

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

          <Button
            type="submit"
            className="rounded-lg border-none mt-1 text-center w-full "
          >
            Sign in
          </Button>
        </div>
      </form>
      <Link className="inline hover:underline mb-1" href="/forget-password">
        Reset your password
      </Link>
    </FormBox>
  );
};

export default Page;
