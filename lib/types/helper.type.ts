import { VisualKey } from "@/components/services-components/ServiceVisuals";

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterRow = {
  title: string;
  links: FooterLink[];
};

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export interface Service {
  label: string;
  detail: string;
  includes: string[];
}

export type Project = {
  title: string;
  category: string;
  url: string;
  summary: string;
  about: string;
  built: string;
  highlights: string[];
  tags: string[];
  visual: VisualKey;
  image?: string;
};