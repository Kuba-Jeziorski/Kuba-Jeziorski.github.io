import Image from "next/image";
import { Tool } from "../domain/model";

type Props = {
  tool: Tool;
};

export default function StackItem({ tool }: Props) {
  const { icon, name, commercial_experience, overall_experience, status } =
    tool;

  return (
    <div className="w-full flex flex-col custom-550:flex-row items-center justify-between gap-3 py-5 border-b border-b-slate-400/20 last:border-b-0">
      <div className="flex items-center gap-2 sm:gap-4">
        {icon && (
          <div className="relative w-9 h-9">
            <Image
              src={icon}
              fill
              alt={`${name}`}
              className="h-full w-full object-contain"
            />
          </div>
        )}
        {name && <p className="text-xl">{name}</p>}
      </div>
      <div className="flex flex-col items-center custom-550:items-end gap-1 text-secondary-text">
        {status && (
          <p className="text-sm">
            <span className="font-bold">{status}</span>
          </p>
        )}
        {commercial_experience && (
          <p className="text-sm">
            Commercial experience:{" "}
            <span className="font-bold">{commercial_experience}</span>
          </p>
        )}
        {overall_experience && (
          <p className="text-sm">
            Overall experience:{" "}
            <span className="font-bold">{overall_experience}</span>
          </p>
        )}
      </div>
    </div>
  );
}
