import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProject, getProjects } from "@/sanity/lib/sanity";
import { urlFor } from "@/sanity/lib/image";
import { ProjectHero } from "./ProjectHero";
import { ProjectContent } from "./ProjectContent";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  console.log(slug.length, "slug");
  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Проект не найден",
    };
  }

  return {
    title: `${project.title} | Мои проекты`,
    description: project.description?.substring(0, 160) || "Детали проекта",
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image
        ? [
            urlFor(project.image)
              .width(1200)
              .height(630)
              .fit("crop")
              .quality(85)
              .url(),
          ]
        : [],
      type: "website",
      locale: "ru_RU",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.image
        ? [
            urlFor(project.image)
              .width(1200)
              .height(630)
              .fit("crop")
              .quality(85)
              .url(),
          ]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug?.current,
  }));
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <section className="min-h-screen py-4 lg:py-8 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-5 left-0  bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium group mb-12"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Назад к проектам
          </Link>

          <ProjectHero project={project} />
          <ProjectContent project={project} />
        </div>
      </section>
    </>
  );
}
