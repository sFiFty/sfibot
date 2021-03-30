import { inputs } from '../constanst';

const translation = {
  [inputs.columnName]: 'Имя команды',
  [inputs.columnInputName]: 'Имя ввода',
  [inputs.columnActionEdit]: 'Редактировать',
  [inputs.columnActionDelete]: 'Удалить',
  [inputs.formName]: 'Команда',
  [inputs.formResponse]: 'Имя ввода',
  [inputs.formAdd]: 'Добавить команду',
  [inputs.formUpdate]: 'Обновить команду',
  [inputs.drawerUpdateTitle]: 'Обновить команду',
  [inputs.drawerCreateTitle]: 'Добавить новую команду',
  [inputs.addNewButton]: 'Добавить новую команду',
  [inputs.formNameValidationRequiredError]: 'Название команды является обязательным полем',
  [inputs.formNameValidationMaxLengthError]: 'Название команды должно содержать менее 20ти символов',
  [inputs.formNameValidationMinLengthError]: 'Название команды должно содержать больше 2х символов',
  [inputs.formResponseValidationRequiredError]: 'Имя ввода является обязательным полем',
  [inputs.formResponseValidationMaxLengthError]: 'Поле имя ввода должно содержать менее 100та символов',
  [inputs.formResponseValidationMinLengthError]: 'Поле имя ввода должно содержать больше 2х символов',
};

export default translation;
