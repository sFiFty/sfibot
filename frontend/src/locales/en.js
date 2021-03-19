import localesConstanst from './localesConstanst';

const { commands } = localesConstanst;

export default {
  commands: {
    [commands.columnCommandName.name]: "Command name",
    [commands.columnResponseName.name]: "Response",
    [commands.columnActionEdit.name]: "Edit",
    [commands.formCommandName.name]: "Command",
    [commands.formCommandResponse.name]: "Response",
    [commands.formCommandAdd.name]: "Add new command",
    [commands.formCommandUpdate.name]: "Update command",
    [commands.drawerUpdateCommandTitle.name]: "Update command",
    [commands.drawerCreateCommandTitle.name]: "Create new command",
    [commands.addNewCommandButton.name]: "Add new command",
  }
}