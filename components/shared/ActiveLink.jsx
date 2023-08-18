"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function ActiveLink({ title, path, targetSegment }) {
  const activeSegment = useSelectedLayoutSegment();
  return (
    <Link
      className={`  font-semibold text-lg ${
        activeSegment === targetSegment ? "text-primary" : ""
      }`}
      href={path}
    >
      {title}
    </Link>
  );
}
