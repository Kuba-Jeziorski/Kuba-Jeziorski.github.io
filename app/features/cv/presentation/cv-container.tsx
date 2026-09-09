import Heading from "@/app/components/ui/heading";
import CustomLink from "@/app/components/ui/custom-link";
import Image from "next/image";

export default function CvContainer() {
  return (
    <div className="w-full flex flex-col gap-2 sm:gap-4">
      <Heading variant="h1">CV</Heading>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="flex items-stretch gap-4 rounded-2xl border border-slate-400/20 bg-card-surface p-4">
          <Image
            src="/cv-image.jpg"
            alt="Jakub Jeziorski"
            width={250}
            height={250}
            className="hidden sm:block rounded-xl object-cover"
            priority
          />
          <div className="flex flex-col">
            <Heading variant="h2">Jakub Jeziorski</Heading>
            <p className="text-secondary-text mb-3">Frontend developer</p>
            <Image
              src="/cv-image.jpg"
              alt="Jakub Jeziorski"
              width={250}
              height={250}
              className="w-full block sm:hidden rounded-xl object-cover mb-4"
              priority
            />
            <p className="text-sm text-justify mb-3">
              Frontend Developer with 4+ years of commercial experience building
              responsive web applications and custom WordPress solutions.
              Experienced in React, TypeScript and modern frontend workflows.
              Passionate about performance, accessibility and writing
              maintainable code. Looking to grow as a React/TypeScript Frontend
              Engineer.
            </p>
            <div className="flex mt-auto">
              <CustomLink url="/cv.pdf" isExternal={false}>
                See details
              </CustomLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-400/20 bg-card-surface p-4">
          <Heading variant="h2">Basic information:</Heading>
          <div className="grid grid-cols1 sm:grid-cols-2 gap-x-4 gap-y-6">
            <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-1 2xl:gap-2">
              E-mail:{" "}
              <a
                href="mailto:jakub.m.jeziorski@gmail.com"
                className="text-primary-accent transition-color inline-block duration-300 hover:text-gradient-accent"
              >
                jakub.m.jeziorski@gmail.com
              </a>
            </div>
            <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-1 2xl:gap-2">
              Location: <span className="font-bold">Gdynia, Poland</span>
            </div>
            <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-1 2xl:gap-2">
              Phone number:{" "}
              <a
                href="tel:+48784484976"
                className="text-primary-accent transition-color inline-block duration-300 hover:text-gradient-accent"
              >
                +48 784 484 976
              </a>
            </div>
            <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-1 2xl:gap-2">
              Birth date: <span className="font-bold">24.04.1996</span>
            </div>
            <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-1 2xl:gap-2">
              LinkedIn:{" "}
              <div className="flex">
                <CustomLink
                  url="https://www.linkedin.com/in/jakub-jeziorski-frontend/"
                  isExternal
                  className="px-2 py-1 text-sm rounded-lg"
                >
                  See more
                </CustomLink>
              </div>
            </div>
            <div className="flex flex-col 2xl:flex-row 2xl:items-center gap-1 2xl:gap-2">
              GitHub:{" "}
              <div className="flex">
                <CustomLink
                  url="https://github.com/Kuba-Jeziorski"
                  isExternal
                  className="px-2 py-1 text-sm rounded-lg"
                >
                  See more
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
