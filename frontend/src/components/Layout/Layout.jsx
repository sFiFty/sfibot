import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import localesConstanst from 'locales/localesConstanst';
import axios from 'axios';
import styled from 'styled-components';
import { Layout as AntLayout, Spin, Drawer, Button, Space, Card, Divider } from 'antd';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import CommandsList from 'components/CommandsList';
import CommandForm from 'components/CommandForm';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  height: 100%;
`;

const Layout = () => {
  const { t } = useTranslation();
  const { commands: tCommands } = localesConstanst;
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commandToEdit, setCommandToEdit] = useState(null);
  const [isCommandDrawerOpen, setIsCommandDrawerOpen] = useState(false);

  const openAddCommandForm = () => {
    setCommandToEdit(null);
    setIsCommandDrawerOpen(true);
  }
  
  const onSetCommandToEdit = (commandId) => {
    setCommandToEdit(commands.find(c => c.id === commandId));
    setIsCommandDrawerOpen(true);
  }



  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:3001/commands/');
      setCommands(response.data);
      setLoading(false);
    }
    getData();
  }, []);

  const isDrawerForUpdate = !!commandToEdit;

  const onDrawerClose = () => {
    setCommandToEdit(null);
    setIsCommandDrawerOpen(false);
  }

  const onUpdateCommands = async () => {
    setLoading(true);
    const response = await axios.get('http://localhost:3001/commands/');
    setCommands(response.data);
    setLoading(false);
    onDrawerClose();
  }
  
  const onAddCommand = async (data) => {
    return axios.post('http://localhost:3001/commands/', data).then(() => onUpdateCommands());
  }

  const onUpdateCommand = async (data) => {
    return axios.patch('http://localhost:3001/commands/', data).then(() => onUpdateCommands());
  }

  return (
    <StyledLayout>
      <Header />
      <AntLayout>
        <Navigation />
        <Content>
          <Card>
            {
              loading ? (
                <Spin />
              ) : (
                <Space direction="vertical" size="middle">
                  <Button onClick={openAddCommandForm}>{t(tCommands.addNewCommandButton.path)}</Button>
                  <Divider />
                  <CommandsList commands={commands} setCommandToEdit={onSetCommandToEdit} />
                  {
                    isCommandDrawerOpen && (
                      <Drawer
                        width="50%"
                        title={isDrawerForUpdate ? t(tCommands.drawerUpdateCommandTitle.path) : t(tCommands.drawerCreateCommandTitle.path)}
                        placement="right"
                        visible
                        onClose={onDrawerClose}
                      >
                        <CommandForm
                          command={commandToEdit}
                          onAddCommand={onAddCommand}
                          onUpdateCommand={onUpdateCommand}
                          isUpdate={isDrawerForUpdate}
                        />
                      </Drawer>
                    )
                  }
                </Space>
              )
            }
          </Card>
        </Content>
      </AntLayout>
      <Footer/>
    </StyledLayout>
  )
};

export default Layout;

