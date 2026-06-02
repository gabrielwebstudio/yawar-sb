import { getStoryblokApi } from "@/lib/storyblok";
import { ReactNode } from "react";

type StoryblokProviderProps = {
    children: ReactNode
}

export default function StoryblokProvider({ children }: StoryblokProviderProps) {
  getStoryblokApi();
  return children;
}