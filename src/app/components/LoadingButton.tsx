import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type Props = {
  value: string;
};

const LoadingButton = ({ value }: Props) => {
  return (
    <Button disabled className="flex">
      <div>{value} </div>
      <Loader2 className="ml-2 h-4 w-4 animate-spin " />
    </Button>
  );
};

export default LoadingButton;
