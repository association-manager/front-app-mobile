export interface Planning {
  '@id'?: string;
  name?: string;
  startAt?: Date;
  endAt?: Date;
  color?: string;
  association?: string;
  category?: string;
  projects?: string[];
  readonly assoManagerEvents?: string[];
  id?: string;
}
