import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div>
        <Button variant="elevated">Im a button</Button>
      </div>
      <div>
        <Input placeholder="Im an input" />
      </div>
      <div>
        <Progress value={45}></Progress>
      </div>
      <div>
        <Textarea placeholder="Im a textarea"></Textarea>
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
