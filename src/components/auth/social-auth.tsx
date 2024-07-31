import { Button } from "@/components/ui/button";

const SocialAuth = () => {
  return (
    <div className="space-y-3">
      <Button className="w-full">Continue with GitHub</Button>

      <Button variant="outline" className="w-full">
        Continue with Google
      </Button>
    </div>
  );
};

export default SocialAuth;
