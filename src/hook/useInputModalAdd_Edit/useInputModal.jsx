
import React, { useState } from 'react'

export const useInputModal = () => {
    const [inputValue, setInputValue] = useState('');

    const ValueChangeHandler = (event) => {
        setInputValue(event.target.value);
      };
      return {inputValue, ValueChangeHandler, setInputValue };
}
