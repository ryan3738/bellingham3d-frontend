import { func, array } from 'prop-types';
import ProductVariant from './ProductVariant';

export default function ProductVariants({
  variants,
  addVariant,
  updateVariant,
}) {
  // console.log('<ProductVariants /> variant:', variants);

  // Take all variants and make list of unique variants
  const uniqueVariants = [
    ...new Set(variants?.map((productVariant) => productVariant.option)),
  ];

  const filteredVariants = uniqueVariants.map((uniqueVariant) => ({
    typeId: uniqueVariant.id,
    typeName: uniqueVariant.name,
    variants: variants
      .filter((variant) => variant.option.id === uniqueVariant.id)
      .map((variant) => ({
        id: variant.id,
        name: variant.name,
      })),
  }));

  // console.log('filteredVariants:', filteredVariants);

  return (
    <div className="details">
      {filteredVariants.map((filteredVariant) => (
        <ProductVariant
          filteredVariant={filteredVariant}
          addVariant={addVariant}
          updateVariant={updateVariant}
          key={filteredVariant.typeId}
        />
      ))}
    </div>
  );
}

ProductVariants.propTypes = {
  variants: array.isRequired,
  addVariant: func.isRequired,
  updateVariant: func.isRequired,
};
