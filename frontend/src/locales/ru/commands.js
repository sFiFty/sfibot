import { commands } from '../constanst';

const translation = {
  [commands.columnName]: 'Имя команды',
  [commands.columnResponse]: 'Ответ',
  [commands.columnActionEdit]: 'Редактировать',
  [commands.columnActionDelete]: 'Удалить',
  [commands.formName]: 'Команда',
  [commands.formResponse]: 'Ответ',
  [commands.formAdd]: 'Добавить команду',
  [commands.formUpdate]: 'Обновить команду',
  [commands.drawerUpdateTitle]: 'Обновить команду',
  [commands.drawerCreateTitle]: 'Добавить новую команду',
  [commands.addRegularButton]: 'Добавить простую команду',
  [commands.addTimerButton]: 'Добавить команду повторения',
  [commands.addInputButton]: 'Добавить команду ввода',
  [commands.formNameValidationRequiredError]: 'Название команды является обязательным полем',
  [commands.formNameValidationMaxLengthError]: 'Название команды должно содержать менее 20ти символов',
  [commands.formNameValidationMinLengthError]: 'Название команды должно содержать больше 2х символов',
  [commands.formResponseValidationRequiredError]: 'Ответ является обязательным полем',
  [commands.formResponseValidationMaxLengthError]: 'Поле ответ должно содержать менее 100та символов',
  [commands.formResponseValidationMinLengthError]: 'Поле ответ должно содержать больше 2х символов',
  [commands.pageHead]: 'Команды',
  [commands.regularCommands]: 'Обычные',
  [commands.timers]: 'Повторяющиеся',
  [commands.inputs]: 'Команды ввода',
};

export default translation;
