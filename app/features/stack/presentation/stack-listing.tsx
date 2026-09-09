import Heading from "@/app/components/ui/heading";
import { Tool } from "../domain/model";
import StackItem from "./stack-item";

type Props = {
  title: string;
  stack: Tool[];
};

export default function StackListing({ title, stack }: Props) {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-2xl border border-slate-400/20 bg-card-surface">
      {title && (
        <Heading
          variant="h2"
          className="font-normal text-2xl text-center custom-550:text-left"
        >
          {title}
        </Heading>
      )}
      {stack.map((tool) => (
        <StackItem key={tool.name} tool={tool} />
      ))}
    </div>
  );
}
