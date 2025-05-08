import { Account, Handle, LinkUrl, Session } from "@/lib/generated/prisma";

export interface HandleProps {
  userName: string;
  name: string;
  isPublic: boolean;
}

export interface LinkProps {
  link: string;
  title: string;
  url: string;
  isPublic: boolean;
  image: string;
}

export interface UpdateLinkProps extends Partial<LinkProps> {}

export interface UpdateHandleProps extends Partial<HandleProps> {}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  summary: string;
  username?: string;
  image?: string;
  isMachine: boolean;
  passwordHash?: string;
  invalidLoginAttempts: number;
  lockedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  accounts: Account[];
  sessions: Session[];
  handles: Handle[];
  linkUrls: LinkUrl[];
}
