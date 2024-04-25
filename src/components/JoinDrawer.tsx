import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props {
  triggerName: string;
  title: string;
  desc: string;
}

export function JoinDrawer({ triggerName, title, desc }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>{triggerName}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{desc}</DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <form className="space-y-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="reason">Why do you want to join?</Label>
              <Input id="reason" required />
            </div>
          </form>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
