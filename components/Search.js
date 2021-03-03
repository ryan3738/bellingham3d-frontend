import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    # Rename property name of query. Good if you want to have mutliple queries of the same property.
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      image {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search() {
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
      console.log('Input changed!');
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
    itemToString: (item) => item?.name || '',
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
          })}
        />
      </div>

      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <Link href={`/product/${item.id}`}>
              <DropDownItem
                key={item.id}
                {...getItemProps({ item })}
                highlighted={index === highlightedIndex}
              >
                <img
                  src={item.image.image.publicUrlTransformed}
                  alt={item.name}
                  width="50"
                />
                {item.name}
              </DropDownItem>
            </Link>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
}
