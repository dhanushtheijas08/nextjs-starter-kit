import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SocialAuth from "@/components/auth/social-auth";

type AuthCardProps = {
  children: React.ReactNode;
  heading: string;
  description?: string;
  shouldShowScoialAuth?: boolean;
  footerDescription?: string | React.ReactNode;
};
const AuthCard = ({
  children,
  heading,
  description,
  footerDescription,
  shouldShowScoialAuth,
}: AuthCardProps) => {
  return (
    <div>
      <Card className="mx-auto w-[480px] border-none">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{heading}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {shouldShowScoialAuth && <SocialAuth />}

          <div className="relative mt-1.5">
            <div className="absolute inset-0 border-t"></div>
            <div className="relative flex justify-center text-xs uppercase -mt-2">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {children}
        </CardContent>
        <CardFooter className="justify-center text-muted-foreground">
          {footerDescription}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthCard;
