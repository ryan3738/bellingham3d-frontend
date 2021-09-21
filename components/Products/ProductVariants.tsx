import { Option, Variant } from '../../types';
import ProductVariant from './ProductVariant';

type AppProps = {
  variants: Variant[];
  setVariants: any;
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

const getFilteredVariants = ({
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
  setVariants,
  updateVariant,
}: AppProps): JSX.Element {
  return (
    <div className="details">
      {getUniqueOptions(variants).map((option) => (
        <ProductVariant
          variants={getFilteredVariants({ variants, optionId: option.id })}
          option={option}
          setVariants={setVariants}
          updateVariant={updateVariant}
          key={option.id}
        />
      ))}
    </div>
  );
}
