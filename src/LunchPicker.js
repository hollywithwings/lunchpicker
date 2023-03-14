import React, { useState } from 'react';

const predefinedOptions = [
  "开小灶",
  "顺德佬",
  "西餐",
  "沙县",
  "日料",
  "茶餐厅",
  "辣可可",
  "老碗会",
  "潮风堂",
];

const LunchPicker = () => {
  const [options, setOptions] = useState([]);
  const [newOptions, setNewOptions] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleNewOptionsChange = (event) => {
    setNewOptions(event.target.value);
  }

  const handleAddOptions = () => {
    const newOptionsArray = newOptions.replace(/[;，]/g, ',').split(',').map((option) => option.trim());
    const newOptionsCombined = [...options, ...newOptionsArray].filter((option) => option !== '');
    setOptions(newOptionsCombined);
    setNewOptions('');
  }

  const pickLunch = () => {
    let randomOption;
    if (options.length > 0) {
      const allOptions = [...options, ...predefinedOptions];
      const randomIndex = Math.floor(Math.random() * allOptions.length);
      randomOption = allOptions[randomIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * predefinedOptions.length);
      randomOption = predefinedOptions[randomIndex];
    }
    setSelectedOption(randomOption);
  }

  const handleClearOptions = () => {
    setOptions([]);
  }

  return (
    <div>
      <p>内置选项： 开小灶，顺德佬，西餐，沙县，日料，茶餐厅，辣可可，老碗会，潮风堂</p>
      <p>新增选项: {options.join(', ')}</p>
      <div>
        <label htmlFor="newOptions">Add new options:</label>
        <br />
        <input type="text" id="newOptions" value={newOptions} onChange={handleNewOptionsChange} />
        <br />
        <button onClick={handleAddOptions}>Add</button>
      </div>
      {selectedOption && <p>Selected option: {selectedOption}</p>}
      <p></p>
      <button onClick={pickLunch}>告诉我吃啥</button>
      <p></p>
      <button onClick={handleClearOptions} disabled={options.length === 0}>清空增加选项</button>
    </div>
  );
}

export default LunchPicker;
