import {
  DialogContentProps,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppStore } from "@/lib/store";
export interface SheetProps extends DialogContentProps {
  trigger: React.ReactNode;
  position: "right" | "left";
  title: string;
  desc: string;
  children?: React.ReactNode;
}
export function Sidebar(props: SheetProps) {
  const { trigger, position = "right", title, desc, children, ...rest } = props;
  const { sidebar, setSidebar } = useAppStore();
  return (
    <Sheet
      open={sidebar}
      onOpenChange={(e) => {
        setSidebar(e);
      }}
    >
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent position={position} {...rest}>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{desc}</SheetDescription>
        </SheetHeader>
        {children && children}{" "}
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
