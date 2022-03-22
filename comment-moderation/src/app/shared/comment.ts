export interface Comment {
  content?: string;
  pseudonym?: string;
  parentComment?: Entity;
  target: Entity;
  ip?: string;
  PublishState?: boolean;
}

export interface Entity {
  id: number;
  title: string;
}
