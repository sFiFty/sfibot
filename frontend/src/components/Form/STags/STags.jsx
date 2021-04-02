import React, { useState, createRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input, Space, Tag } from 'antd';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormElementContainer from '../StyledForm';

const TagAsButton = styled(Tag)`
  cursor: pointer;
  .delete {
    margin-left: 5px;
  }
`;

const STags = ({
  field, form, label, addNewTitle,
}) => {
  const [isAddInputVisible, setIsAddInputVisible] = useState(false);
  const inputRef = createRef(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!isAddInputVisible) {
      return;
    }
    inputRef.current.input.focus();
  }, [isAddInputVisible]);

  const onBlur = (event) => {
    const eventValue = event.target.value.trim();
    setValue('');
    setIsAddInputVisible(false);
    if (!eventValue || form.values[field.name].includes(eventValue)) {
      return;
    }
    form.setFieldValue(field.name, [...form.values[field.name], eventValue]);
  };
  const onPressEnter = (event) => {
    event.preventDefault();
    inputRef.current.input.blur();
  };
  const onInputChange = (event) => setValue(event.target.value);
  const onShowInput = () => {
    setIsAddInputVisible(!isAddInputVisible);
  };
  const onDeleteTag = (tagName) => {
    const filteredValues = form.values[field.name].filter((v) => v !== tagName);
    form.setFieldValue(field.name, filteredValues);
  };
  return (
    <FormElementContainer>
      {
        label && (
          <label htmlFor={field.name}>{label}</label>
        )
      }
      <Space wrap>
        {
          form.values[field.name].map((tag) => (
            <TagAsButton
              className="edit-tag"
              key={tag}
            >
              {tag}
              <FontAwesomeIcon onClick={() => onDeleteTag(tag)} className="delete" icon={faTimes} />
            </TagAsButton>
          ))
        }
        {
          isAddInputVisible ? (
            <Input
              ref={inputRef}
              type="text"
              size="small"
              className="tag-input"
              value={value}
              onChange={onInputChange}
              onBlur={onBlur}
              onPressEnter={onPressEnter}
            />
          ) : (
            <TagAsButton className="site-tag-plus" onClick={onShowInput}>
              <FontAwesomeIcon icon={faPlus} /> {addNewTitle}
            </TagAsButton>
          )
        }

      </Space>
    </FormElementContainer>
  );
};

STags.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    values: PropTypes.shape({
      [PropTypes.string]: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addNewTitle: PropTypes.string.isRequired,
};

export default STags;
