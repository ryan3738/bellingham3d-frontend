import { Variant } from '../../types';
import ProductVariant from './ProductVariant';

type AppProps = {
  variants: Variant[];
  addVariant: any;
  updateVariant: any;
};

export default function ProductVariants({
  variants,
  addVariant,
  updateVariant,
}: AppProps): JSX.Element {
  // console.log('<ProductVariants /> variant:', variants);

  // Take all variants and make list of unique variants
  const uniqueVariants = [
    ...new Set(variants?.map((variant) => variant.option)),
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
