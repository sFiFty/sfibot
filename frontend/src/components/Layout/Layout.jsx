import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Layout as AntLayout, Spin  } from 'antd';
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
  const [commands, setCommands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commandToEdit, setCommandToEdit] = useState(null);

  const onSetCommandToEdit = (commandId) => {
    setCommandToEdit(commands.find(c => c.id === commandId));
  }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:3001/commands/');
      setCommands(response.data);
      setLoading(false);
    }
    getData();
  }, []);

  console.log(commandToEdit)

  const onAddCommand = async (data) => {
    await axios.post('http://localhost:3001/commands/', data)
  }

  const onUpdateCommand = async (data) => {
    console.log(data)
    // Update here || TODO
  }

  return (
    <StyledLayout>
      <Header />
      <AntLayout>
        <Navigation />
        <Content>
          {
            loading ? (
              <Spin />
            ) : (
              <>
                <CommandsList commands={commands} setCommandToEdit={onSetCommandToEdit} />
                <CommandForm key={commandToEdit ? commandToEdit.id : undefined} command={commandToEdit} onAddCommand={onAddCommand} onUpdateCommand={onUpdateCommand} />
              </>
            )
          }
        </Content>
      </AntLayout>
      <Footer/>
    </StyledLayout>
  )
};

export default Layout;

