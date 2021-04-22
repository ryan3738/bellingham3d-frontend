import { func, object } from 'prop-types';
import { useEffect, useState } from 'react';

export default function ProductVariant({
  filteredVariant,
  addVariant,
  updateVariant,
}) {
  // console.log('<filteredVariant /> filteredVariant:', filteredVariant);
  const [valueState, setValueState] = useState(filteredVariant.variants[0].id);

  const { typeName } = filteredVariant;

  useEffect(() => {
    addVariant(typeName, valueState);
  }, []);

  function handleChange(e) {
    setValueState(e.target.value);
    updateVariant(typeName, e.target.value);
  }

  return (
    <>
      <div className="details">
        <div key={filteredVariant.typeId}>
          <label htmlFor={filteredVariant.typeId}>{typeName}</label>
          <select
            name={typeName}
            id={filteredVariant.typeId}
            value={valueState}
            onChange={handleChange}
          >
            {filteredVariant.variants.map((variant) => (
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

ProductVariant.propTypes = {
  filteredVariant: object.isRequired,
  addVariant: func.isRequired,
  updateVariant: func.isRequired,
};
