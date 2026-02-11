import { getProjects } from "@/sanity/lib/sanity";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN!;
  const projects = await getProjects();

  const staticPages = [
    { url: baseUrl, priority: 1.0, freq: "weekly" as const },
    { url: `${baseUrl}/projects`, priority: 0.95, freq: "weekly" as const },
    { url: `${baseUrl}#about`, priority: 0.9, freq: "monthly" as const },
    { url: `${baseUrl}#skills`, priority: 0.85, freq: "monthly" as const },
    { url: `${baseUrl}#contact`, priority: 0.8, freq: "weekly" as const },
  ];

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug?.current}`,
    lastModified: new Date(Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...projectPages].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
