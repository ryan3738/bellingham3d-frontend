import { Option, selectVariantType, Variant } from '../../types';
import ProductVariant from './ProductVariant';

type AppProps = {
  variants: Variant[];
  setVariants: any;
  updateVariant: any;
  selectVariant: selectVariantType;
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
  option,
  variants,
}: {
  option: Option;
  variants: Variant[];
}): Variant[] => {
  const filteredVariants = variants
    .filter((variant) => variant.option.id === option.id)
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
  selectVariant,
}: AppProps): JSX.Element {
  return (
    <div className="details">
      {getUniqueOptions(variants).map((option) => (
        <ProductVariant
          variants={getFilteredVariants({ variants, option })}
          option={option}
          setVariants={setVariants}
          updateVariant={updateVariant}
          key={option.id}
          selectVariant={selectVariant}
        />
      ))}
    </div>
  );
}
