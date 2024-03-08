import React from 'react';
import Select from 'react-select';

export const EdgesHindrancesSelect = ({ options, value, onChange, placeholder }) => {
  const formattedOptions = options.map(option => ({
    value: option.id,
    label: `${option.name}: ${option.description}`,
  }));

  const handleChange = (selectedOptions) => {
    const selectedIds = selectedOptions ? selectedOptions.map(option => option.value) : [];
    onChange(selectedIds);
  };

  const formattedValue = formattedOptions.filter(option => value.includes(option.value));

  return (
    <Select
      isMulti
      options={formattedOptions}
      value={formattedValue}
      onChange={handleChange}
      placeholder={placeholder}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  );
};
