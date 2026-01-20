import { SanityProject } from "@/app/types";
import { client } from "./client";

export async function getProjects(): Promise<SanityProject[]> {
  return client.fetch(
    `*[_type == "project"] | order(featured desc, _createdAt desc) {
      _id,
      title,
      slug,
      description,
      technologies,
      category,
      liveUrl,
      codeUrl,
      featured,
      image,
    }`,
  ) as Promise<SanityProject[]>;
}

export async function getProject(slug: string): Promise<SanityProject | null> {
  const result = (await client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      technologies,
      category,
      liveUrl,
      codeUrl,
      featured,
      image,
    }`,
    { slug },
  )) as SanityProject | null;

  return result;
}
