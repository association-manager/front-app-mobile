export interface Task {
  '@id'?: string;
  title?: string;
  startDate?: Date;
  endDate?: Date;
  type?: string;
  description?: string;
  projectPlanning?: string;
  memberTaskWorkGroupRelations?: string[];
  id?: string;
}
