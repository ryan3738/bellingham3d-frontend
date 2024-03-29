/* eslint-disable react/jsx-props-no-spreading */
import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { siteData } from '../public/site-data';
import { SEARCH_PRODUCTS_QUERY } from '../queries/searchProducts';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const Search = function (): JSX.Element {
  const router = useRouter();
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: 'no-cache',
    }
  );
  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(findItems, 350);
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      // console.log('Input changed!');
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/product/${selectedItem.id}`,
      });
    },
    itemToString: (item: any) => item?.name || '',
  });
  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for an Item',
            id: 'search',
            className: loading ? 'loading' : '',
            'aria-label': 'product search',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <Link href={`/product/${item.id}`} key={index} passHref>
              <DropDownItem
                key={item.id}
                {...getItemProps({ item })}
                highlighted={index === highlightedIndex}
              >
                <div className="image">
                  <Image
                    src={
                      item.images[0]
                        ? item?.images[0]?.image?.publicUrlTransformed
                        : siteData.placeholderImage.small.src
                    }
                    alt={item.name}
                    width="50"
                    height="50"
                    loading="eager"
                    layout="fixed"
                    objectFit="contain"
                  />
                </div>
                <div>{item.name}</div>
              </DropDownItem>
            </Link>
          ))}
        {isOpen && !items.length && !loading && !error && (
          <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
};

export default Search;
