/* eslint-disable jsx-a11y/no-onchange */
import { useEffect, useState } from 'react';
import { Option, Variant } from '../../types';

type AppProps = {
  option: Option;
  variants: Variant[];
  setVariants: any;
  updateVariant: any;
};

export default function ProductVariant({
  option,
  variants,
  setVariants,
  updateVariant,
}: AppProps): JSX.Element {
  // console.log('<filteredVariant /> filteredVariant:', filteredVariant);
  const [variantState, setVariantState] = useState(variants[0].id);

  const { name } = option;

  useEffect(() => {
    setVariants(name, variantState);
  }, []);

  function handleChange(e): void {
    setVariantState(e.target.value);
    updateVariant(name, e.target.value);
  }

  return (
    <>
      <div className="details">
        <div key={option.id}>
          <label htmlFor={option.id}>{name}</label>
          <select
            name={name}
            id={option.id}
            value={variantState}
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
