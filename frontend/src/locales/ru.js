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
  }
}