"use client";

import ExperienceDetail from "@/components/experience-detail";
import { notFound } from "next/navigation";
import { experiences } from "@/app/page";

export default function ExperiencePage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <ExperienceDetail experience={experience} />
  );
}
