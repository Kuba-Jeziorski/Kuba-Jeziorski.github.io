import Image from "next/image";
import { Course } from "../domain/model";
import Badges from "@/app/components/ui/badges";
import CustomLink from "@/app/components/ui/custom-link";
import Heading from "@/app/components/ui/heading";

type Props = {
  course: Course;
};

export default function CoursesItem({ course }: Props) {
  const { name, icon, description, certificate_url, stack, state } = course;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-400/20 bg-card-surface p-4">
      <div className="flex custom-375:items-center flex-col custom-375:flex-row gap-2 sm:gap-4 mb-4">
        {icon && (
          <div className="w-15 h-15 rounded-xl bg-secondary-text p-2 flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={icon}
                fill
                alt={`${name}`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        )}
        <Heading variant="h3" className="flex-1 max-w-4/5 text-balance mb-0">
          {name}
        </Heading>
      </div>
      {state && (
        <p className="flex items-center gap-1 mb-3">
          Status: <span className="text-primary-accent font-bold">{state}</span>
        </p>
      )}
      <p className="text-secondary-text mb-4">{description}</p>
      {stack.length > 0 && (
        <div className="flex flex-col custom-375:flex-row gap-2 mb-6">
          <p className="pt-0.5">Stack:</p>
          <div className="flex flex-1 flex-wrap gap-2 mb-4">
            <Badges badges={stack} />
          </div>
        </div>
      )}
      {certificate_url && (
        <div className="flex align-items-center gap-4 mt-auto">
          <CustomLink url={certificate_url} isExternal>
            Certificate
          </CustomLink>
        </div>
      )}
    </div>
  );
}
