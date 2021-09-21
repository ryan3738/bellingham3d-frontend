import { Option, Variant } from '../../types';
import ProductVariant from './ProductVariant';

type AppProps = {
  variants: Variant[];
  addVariant: any;
  updateVariant: any;
};

const getOptions = (variants: Variant[]): Option[] => {
  const options = variants.map((variant) => {
    return variant.option;
  });
  const uniqueOptionsSet = new Set(options);
  const uniqueOptionsArray = Array.from(uniqueOptionsSet);
  return uniqueOptionsArray;
};

export default function ProductVariants({
  variants,
  addVariant,
  updateVariant,
}: AppProps): JSX.Element {
  // console.log('<ProductVariants /> variant:', variants);

  console.log('OPTIONS!!!', getOptions(variants));
  // Take all variants and make list of unique variants
  const uniqueVariants = [
    ...new Set(variants?.map((variant) => variant.option)),
  ];

  console.log('UNIQUE VARIANTS', uniqueVariants);

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

  console.log('filteredVariants:', filteredVariants);

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
