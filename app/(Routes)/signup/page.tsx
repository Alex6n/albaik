import FormBox from "@/components/FormBox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const page = () => {
  const errors = {
    mobile: {
      message: "mobile err",
    },
    password: {
      message: "password err",
    },
  };

  const isLoading = false;
  return (
    <FormBox
      heading="Create an account"
      buttonTitle="Sign up"
      linkTitle="Already have an account?"
      linkHref="/login"
    >
      <div className="grid gap-1 py-2">
        <Label htmlFor="mobile">Mobile</Label>
        <Input type="tel" className="border-b border-black w-64" />
        {errors?.mobile && (
          <p className="text-sm text-red-500">{errors.mobile.message}</p>
        )}
      </div>
      <div className="grid gap-1 py-2">
        <Label htmlFor="mobile">Password</Label>
        <Input type="password" className="border-b border-black w-64" />
        {errors?.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
    </FormBox>
  );
};

export default page;
