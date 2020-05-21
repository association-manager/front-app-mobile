export class ProjectTaskListItem {

  constructor(readonly color: string,
              readonly description: string) {
  }

  static TO_DO(): ProjectTaskListItem {
    return new ProjectTaskListItem('#FF708D', 'À faire');
  }

  static IN_PROGRESS(): ProjectTaskListItem {
    return new ProjectTaskListItem('#FFC94D', 'En cours');
  }

  static COMPLETED(): ProjectTaskListItem {
    return new ProjectTaskListItem('#3366FF', 'Terminée');
  }
}
