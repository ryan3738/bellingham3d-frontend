import { Option, Variant } from '../../types';
import ProductVariant from './ProductVariant';

type AppProps = {
  variants: Variant[];
  addVariant: any;
  updateVariant: any;
};

const getUniqueOptions = (variants: Variant[]): Option[] => {
  const options = variants.map((variant) => {
    return variant.option;
  });
  const uniqueOptionsSet = new Set(options);
  const uniqueOptionsArray = Array.from(uniqueOptionsSet);
  return uniqueOptionsArray;
};

const getVariants = ({
  optionId,
  variants,
}: {
  optionId: Option['id'];
  variants: Variant[];
}): Variant[] => {
  const filteredVariants = variants
    .filter((variant) => variant.option.id === optionId)
    .map((variant) => ({
      id: variant.id,
      name: variant.name,
    }));
  return filteredVariants;
};

export default function ProductVariants({
  variants,
  addVariant,
  updateVariant,
}: AppProps): JSX.Element {
  return (
    <div className="details">
      {getUniqueOptions(variants).map((option) => (
        <ProductVariant
          variants={getVariants({ variants, optionId: option.id })}
          option={option}
          addVariant={addVariant}
          updateVariant={updateVariant}
          key={option.id}
        />
      ))}
    </div>
  );
}
