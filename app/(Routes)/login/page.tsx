import FormBox from "@/components/FormBox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
      heading="Sign in to your account"
      buttonTitle="Sign in"
      linkTitle="Don't have an account?"
      linkHref="/signup"
    >
      <div className="grid gap-1 py-2">
        <Label htmlFor="mobile">Mobile</Label>
        <div className="flex w-60 gap-1">
          <div className="border-b border-black w-16 text-[13px] flex justify-center items-center">
            +966
          </div>
          <Input type="tel" className="border-b border-black w-full" />
        </div>
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
