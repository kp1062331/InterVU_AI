/** Shapes shared across more than one module. Component-local data stays local. */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
