import React from 'react';
import PropTypes from 'prop-types'; 
import { Radio, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { PageHeadContainer, StyledRadioGroup } from './PageHeadStyled';

const { Button: RadioButton } = Radio;

const PageHead = ({ pageName, tabs = [], onTabChange, addButtonTitle, addAction }) => {

  const hadleTabChange = (event) => {
    const tab = tabs.find(t => t.id === event.target.value);
    onTabChange(tab);
  };

  return (
    <PageHeadContainer>
      <h2>{pageName}</h2>
      {
        tabs.length > 0 && (
          <StyledRadioGroup defaultValue={tabs[0].id} size="large" onChange={hadleTabChange}>
            {
              tabs.map(tab => (
                <RadioButton key={tab.id} value={tab.id}>{tab.name}</RadioButton>
              ))
            }
          </StyledRadioGroup>
        )
      }
      <div>
        {
          addButtonTitle && addAction && (
            <Button type="primary" onClick={addAction} icon={<FontAwesomeIcon icon={faPlus} />}>
              {addButtonTitle}
            </Button>
          )
        }
      </div>
    </PageHeadContainer>
  )
}

PageHead.propTypes = {
  pageName: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  onTabChange: PropTypes.func,
  addButtonTitle: PropTypes.string,
  addAction: PropTypes.func,
}

PageHead.defaultProps = {
  tabs: [],
  onTabChange: () => {},
  addAction: () => {},
  addButtonTitle: null,
}

export default PageHead;
