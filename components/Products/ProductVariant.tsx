/* eslint-disable jsx-a11y/no-onchange */
import { useEffect, useState } from 'react';
import { Option, SelectVariantType, Variant } from '../../types/types';

type AppProps = {
  option: Option;
  variants: Variant[];
  selectVariant: SelectVariantType;
};

export default function ProductVariant({
  option,
  variants,

  selectVariant,
}: AppProps): JSX.Element {
  const [variantState, setVariantState] = useState<Variant>(variants[0]);

  const { name } = option;

  useEffect(() => {
    selectVariant({ option, variant: variantState });
  }, [variantState, option, selectVariant]);

  function handleChange(e): void {
    const index = e.target.selectedIndex;
    setVariantState({
      id: e.target.value,
      name: e.target.options[index].text,
    });
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
