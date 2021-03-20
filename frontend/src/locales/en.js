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
    [commands.formCommandNameValidationRequiredError.name]: "Command name is required field",
    [commands.formCommandNameValidationMaxLengthError.name]: "Command name should contain less then 20 characters",
    [commands.formCommandNameValidationMinLengthError.name]: "Command name should contain more then 2 characters",
    [commands.formCommandResponseValidationRequiredError.name]: "Response is required field",
    [commands.formCommandResponseValidationMaxLengthError.name]: "Response should contain less then 100 characters",
    [commands.formCommandResponseValidationMinLengthError.name]: "Response should contain more then 2 characters",
  }
}