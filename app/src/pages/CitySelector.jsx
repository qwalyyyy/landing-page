// CitySelector.jsx
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'kaliningrad', label: 'Калининград' },
  { value: 'moscow', label: 'Москва' },
  { value: 'saint-petersburg', label: 'Санкт-Петербург' },
  { value: 'yekaterinburg', label: 'Екатеринбург' },
  { value: 'novosibirsk', label: 'Новосибирск' },
  { value: 'vladivostok', label: 'Владивосток' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: '30px',
    height: '30px',
    borderRadius: '4px',
    borderColor: '#ddd',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0 8px',
  }),
  indicatorSeparator: () => null,
  clearIndicator: (provided) => ({
    ...provided,
    padding: '0 8px',
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '30px',
    padding: '0 8px',
  }),
  input: (provided) => ({
    ...provided,
    margin: '0',
    padding: '0',
  }),
};

const CitySelector = ({ selectedCity, onChange }) => {
  return (
    <Select
      value={options.find(option => option.value === selectedCity)}
      onChange={onChange}
      options={options}
      placeholder="Выбрать город"
      styles={customStyles}
      isSearchable
    />
  );
};

export default CitySelector;
