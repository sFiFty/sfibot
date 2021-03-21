import { commands } from '../constanst';

export default {
  [commands.columnName]: "Command name",
  [commands.columnResponseName]: "Response",
  [commands.columnActionEdit]: "Edit",
  [commands.columnActionDelete]: "Delete",
  [commands.formName]: "Command",
  [commands.formResponse]: "Response",
  [commands.formAdd]: "Add new command",
  [commands.formUpdate]: "Update command",
  [commands.drawerUpdateTitle]: "Update command",
  [commands.drawerCreateTitle]: "Create new command",
  [commands.addNewButton]: "Add new command",
  [commands.formNameValidationRequiredError]: "Command name is required field",
  [commands.formNameValidationMaxLengthError]: "Command name should contain less then 20 characters",
  [commands.formNameValidationMinLengthErrore]: "Command name should contain more then 2 characters",
  [commands.formResponseValidationRequiredError]: "Response is required field",
  [commands.formResponseValidationMaxLengthError]: "Response should contain less then 100 characters",
  [commands.formResponseValidationMinLengthError]: "Response should contain more then 2 characters",
}