import { useEffect, useState } from 'react';

interface EventInterface {
  target: { value: string; name: string; type: string };
}

interface FormInterface {
  inputs: Record<string, any>;
  handleChange: (event: EventInterface) => void;
  resetForm: () => void;
  clearForm: () => void;
}

export default function useForm(initial = {}): FormInterface {
  // create a state object for our inputs
  const [inputs, setInputs] = useState({});
  const initialValues = Object.values(initial).join('');

  // Monitors state data and updates
  useEffect(() => {
    // This function runs when the things we are watching change
    setInputs(initial);
  }, [initialValues]);

  //   {
  //       name: 'ryan',
  //       description: 'cool',
  //       price: 1000
  //   }

  function handleChange(event): void {
    let { value, name, type } = event.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = event.target.files;
    }
    if (type === 'checkbox') {
      value = event.target.checked;
    }
    setInputs({
      // copy the existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm(): void {
    setInputs(initial);
  }

  function clearForm(): void {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }
  // return the things we want to surface from this custom hook
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
