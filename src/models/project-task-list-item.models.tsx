export class ProjectTaskListItem {

  constructor( readonly color: string,
               readonly description: string,
               public checked: boolean) {
  }

  static TO_DO(checked?: boolean): ProjectTaskListItem {
    return new ProjectTaskListItem('#FF708D', 'À faire', checked?checked:false);
  }

  static IN_PROGRESS(checked?: boolean): ProjectTaskListItem {
    return new ProjectTaskListItem('#FFC94D', 'En cours', checked?checked:false);
  }

  static COMPLETED(checked?: boolean): ProjectTaskListItem {
    return new ProjectTaskListItem('#3366FF', 'Terminée', checked?checked:false);
  }
}
