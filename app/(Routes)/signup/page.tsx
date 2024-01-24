"use client";

import FormBox from "@/components/FormBox";
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

  const submitData = (data: TAuthCredentialsValidator) => {
    console.log("hello", data);
  };

  return (
    <FormBox
      heading="Create an account"
      linkTitle="Already have an account?"
      linkHref="/login"
    >
      {errors?.mobile && (
        <p className="text-sm text-red-500 max-w-60 mt-1">
          Response Error Goes Here
        </p>
      )}
      <form className="p-5 max-w-[370px]" onSubmit={handleSubmit(submitData)}>
        <div className="grid gap-2">
          <div className="grid gap-1 w-60 py-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              {...register("firstName")}
              type="text"
              className="border-b border-black w-full"
            />
            {errors?.firstName && (
              <p className="text-sm text-red-500 max-w-60">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="grid gap-1 w-60 py-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              {...register("lastName")}
              type="text"
              className="border-b border-black w-full"
            />
            {errors?.lastName && (
              <p className="text-sm text-red-500 max-w-60">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="grid gap-1 py-2">
            <Label htmlFor="mobile">Mobile</Label>
            <div className="flex w-60 gap-1">
              <div className="border-b border-black w-16 text-[13px] flex justify-center items-center">
                +966
              </div>
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
            <Label htmlFor="email">Email Address</Label>
            <Input
              {...register("email")}
              type="email"
              className="border-b border-black w-full"
            />
            {errors?.email && (
              <p className="text-sm text-red-500 max-w-60">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="grid gap-1 w-60 py-2">
            <Label htmlFor="mobile">Password</Label>
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
            Sign up
          </Button>
        </div>
      </form>
    </FormBox>
  );
};

export default Page;
