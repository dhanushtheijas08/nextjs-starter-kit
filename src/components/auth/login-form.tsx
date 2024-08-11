import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href="/auth/forgot-password"
            className="text-muted-foreground underline underline-offset-2"
          >
            Forgot Password?
          </Link>
        </div>
        <Input id="password" type="password" placeholder="********" />
      </div>
      <Button type="submit" className="w-full">
        Login to your account
      </Button>
    </div>
  );
};

export default LoginForm;
