import localesConstanst from './localesConstanst';

const { commands } = localesConstanst;

export default {
  commands: {
    [commands.columnCommandName.name]: "Имя команды",
    [commands.columnResponseName.name]: "Ответ",
    [commands.columnActionEdit.name]: "Редактировать",
    [commands.formCommandName.name]: "Команда",
    [commands.formCommandResponse.name]: "Ответ",
    [commands.formCommandAdd.name]: "Добавить команду",
    [commands.formCommandUpdate.name]: "Обновить команду",
    [commands.drawerUpdateCommandTitle.name]: "Обновить команду",
    [commands.drawerCreateCommandTitle.name]: "Добавить новую команду",
    [commands.addNewCommandButton.name]: "Добавить новую команду",
    [commands.formCommandNameValidationRequiredError.name]: "Название команды является обязательным полем",
    [commands.formCommandNameValidationMaxLengthError.name]: "Название команды должно содержать менее 20ти символов",
    [commands.formCommandNameValidationMinLengthError.name]: "Название команды должно содержать больше 2х символов",
    [commands.formCommandResponseValidationRequiredError.name]: "Ответ является обязательным полем",
    [commands.formCommandResponseValidationMaxLengthError.name]: "Поле ответ должно содержать менее 100та символов",
    [commands.formCommandResponseValidationMinLengthError.name]: "Поле ответ должно содержать больше 2х символов",
  }
}