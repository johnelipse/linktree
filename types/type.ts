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
