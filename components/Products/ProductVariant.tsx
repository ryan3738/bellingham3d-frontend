/* eslint-disable jsx-a11y/no-onchange */
import { useEffect, useState } from 'react';
import { Option, selectVariantType, Variant } from '../../types';

type AppProps = {
  option: Option;
  variants: Variant[];
  setVariants: any;
  updateVariant: any;
  selectVariant: selectVariantType;
};

export default function ProductVariant({
  option,
  variants,
  setVariants,
  updateVariant,
  selectVariant,
}: AppProps): JSX.Element {
  const [variantState, setVariantState] = useState(variants[0]);

  const { name } = option;

  // console.log('VARIANT STATE in ProductVariant', variantState);

  useEffect(() => {
    setVariants(option, variantState);
  }, []);

  function handleChange(e): void {
    const index = e.target.selectedIndex;
    setVariantState({
      id: e.target.value,
      name: e.target.options[index].text,
    });
    updateVariant(option, {
      id: e.target.value,
      name: e.target.options[index].text,
    });
    selectVariant({ option, variant: variantState });
  }

  return (
    <>
      <div className="details">
        <div key={option.id}>
          <label htmlFor={option.id}>{name}</label>
          <select
            name={name}
            id={option.id}
            value={variantState.id}
            onChange={handleChange}
          >
            {variants.map((variant) => (
              <option value={variant.id} key={variant.id}>
                {variant.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <style jsx>{`
        select {
          width: 100%;
          padding: 0.5rem;
          font-size: 1rem;
          border: 1px solid black;
          margin: 5px 0 20px 0;
        }
        select:focus {
          outline: 0;
          border-color: var(--navyBlue);
        }
      `}</style>
    </>
  );
}
