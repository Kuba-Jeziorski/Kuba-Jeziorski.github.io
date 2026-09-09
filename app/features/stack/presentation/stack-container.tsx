import Heading from "@/app/components/ui/heading";
import StackListing from "./stack-listing";
import { activeTools } from "../data/active-tools";
import { futureTools } from "../data/future-tools";

export default function StackContainer() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Heading variant="h1">Stack</Heading>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <StackListing title="My toolkit" stack={activeTools} />
        <StackListing title="Future learning" stack={futureTools} />
      </div>
    </div>
  );
}
