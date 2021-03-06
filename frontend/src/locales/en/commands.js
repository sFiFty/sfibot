import { commands } from '../constanst';

const translation = {
  [commands.columnName]: 'Command name',
  [commands.columnResponse]: 'Response',
  [commands.columnActionEdit]: 'Edit',
  [commands.columnActionDelete]: 'Delete',
  [commands.formName]: 'Command',
  [commands.formResponse]: 'Response',
  [commands.formAdd]: 'Add new command',
  [commands.formUpdate]: 'Update command',
  [commands.drawerUpdateTitle]: 'Update command',
  [commands.drawerCreateTitle]: 'Create new command',
  [commands.addCustomButton]: 'Create custom command',
  [commands.addTimerButton]: 'Create timer',
  [commands.addInputButton]: 'Create input',
  [commands.formNameValidationRequiredError]: 'Command name is required field',
  [commands.formNameValidationMaxLengthError]: 'Command name should contain less then 20 characters',
  [commands.formNameValidationMinLengthErrore]: 'Command name should contain more then 2 characters',
  [commands.formResponseValidationRequiredError]: 'Response is required field',
  [commands.formResponseValidationMaxLengthError]: 'Response should contain less then 100 characters',
  [commands.formResponseValidationMinLengthError]: 'Response should contain more then 2 characters',
  [commands.pageHead]: 'Commands',
  [commands.customCommands]: 'Custom',
  [commands.timers]: 'Timers',
  [commands.inputs]: 'Inputs',
};

export default translation;
