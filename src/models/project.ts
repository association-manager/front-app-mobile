export interface Project {
  '@id'?: string;
  name?: string;
  startAt: Date;
  endAt: Date;
  status?: boolean;
  projectType?: string;
  description?: string;
  planning?: string;
  projectPlannings?: string[];
  id?: string;
}
