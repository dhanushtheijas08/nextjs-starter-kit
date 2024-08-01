import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterForm = () => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" placeholder="Ram Kumar" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="********" />
      </div>
      <Button type="submit" className="w-full">
        Create
      </Button>
    </div>
  );
};

export default RegisterForm;
