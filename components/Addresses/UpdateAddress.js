import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { object } from 'prop-types';
import { useEffect, useState } from 'react';
import { useMenu } from '../../lib/menuState';
import useForm from '../../lib/useForm';
import { USER_ADDRESSES_QUERY } from '../../queries/getUserAddresses';
import DisplayError from '../ErrorMessage';
import Form from '../styles/Form';
import { ButtonStyles } from '../styles/StateStyles';
import { useUser } from '../User';

const UPDATE_ADDRESS_MUTATION = gql`
  mutation UPDATE_ADDRESS_MUTATION(
    $id: ID!
    $firstName: String
    $lastName: String
    $company: String
    $address1: String
    $address2: String
    $city: String
    $region: String
    $country: String
    $zip: String
    $phone: String
    $isDefaultShipping: UserRelateToOneInput
  ) {
    updateCustomerAddress(
      id: $id
      data: {
        firstName: $firstName
        lastName: $lastName
        company: $company
        address1: $address1
        address2: $address2
        city: $city
        region: $region
        country: $country
        zip: $zip
        phone: $phone
        isDefaultShipping: $isDefaultShipping
      }
    ) {
      id
      firstName
      lastName
      company
      address1
      address2
      city
      region
      country
      zip
      phone
      isDefaultShipping {
        id
      }
    }
  }
`;

export default function UpdateAddress({ address }) {
  const user = useUser();
  const { closeMenu } = useMenu();
  const [makeDefault, setMakeDefault] = useState(null);
  const [isDefault, setIsDefault] = useState();

  // 1. We need to get the existing address
  // const { data, error, loading } = useQuery(SINGLE_ADDRESS_QUERY, {
  //   variables: { id },
  // });

  // 2. We need to get the mutation to update the product
  const [
    updateCustomerAddress,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_ADDRESS_MUTATION);

  // Check if current address is default and set state
  useEffect(
    (currentAddress = address) => {
      if (currentAddress.isDefaultShipping?.id === undefined || null) {
        setIsDefault(false);
      }
      if (currentAddress.isDefaultShipping?.id) {
        setIsDefault(true);
      }
    },
    [address]
  );

  // 2.5 Create some state for the form inputs
  const { inputs, handleChange } = useForm({
    ...address,
    makeDefault: isDefault,
  });

  // console.log('inputs', inputs);
  // console.log('isDefault?', isDefault);
  // console.log('defaultAddress', makeDefault);

  // Change makeDefault state depending on checkbox status
  useEffect(() => {
    if (inputs.makeDefault === false) {
      setMakeDefault(() => null);
    }
    if (inputs.makeDefault === true) {
      setMakeDefault(() => ({
        isDefaultShipping: { connect: { id: user.id } },
      }));
    }
  }, [inputs.makeDefault, user.id]);

  // No longer needed because address data is passed in
  // if (!data) return null;
  // if (loading) return <p>Loading...</p>;

  // 3. We need the form to handle the updates
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateCustomerAddress({
          variables: {
            id: address.id,
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            company: inputs.company,
            address1: inputs.address1,
            address2: inputs.address2,
            city: inputs.city,
            country: inputs.country,
            zip: inputs.zip,
            phone: inputs.phone,
            ...makeDefault,
          },
        }).catch(console.error);
        console.log('response', res);
        closeMenu();
      }}
    >
      <DisplayError error={updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        {address.isDefaultShipping?.id && <h4>Default Address</h4>}
        <label htmlFor="firstName">
          First Name
          <input
            required
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            autoComplete="first name"
            value={inputs.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            autoComplete="last name"
            value={inputs.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="company">
          Company
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company"
            autoComplete="Company"
            value={inputs.company}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="address1">
          Address 1
          <input
            required
            type="text"
            id="address1"
            name="address1"
            placeholder="Address 1"
            autoComplete="address 1"
            value={inputs.address1}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="address2">
          Address 2
          <input
            type="text"
            id="address2"
            name="address2"
            placeholder="Address 2"
            autoComplete="address 2"
            value={inputs.address2}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="city">
          City
          <input
            required
            type="text"
            id="city"
            name="city"
            placeholder="City"
            autoComplete="city"
            value={inputs.city}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="region">
          State
          <input
            required
            type="text"
            id="region"
            name="region"
            placeholder="State"
            autoComplete="region"
            value={inputs.region}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="country">
          Country
          <input
            required
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            autoComplete="country"
            value={inputs.country}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="zip">
          Zip
          <input
            required
            type="text"
            id="zip"
            name="zip"
            placeholder="Zip"
            autoComplete="zip"
            value={inputs.zip}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Phone"
            autoComplete="phone"
            value={inputs.phone}
            onChange={handleChange}
          />
        </label>
        <label type="checkbox" htmlFor="makeDefault">
          Make Default
          <input
            type="checkbox"
            id="makeDefault"
            name="makeDefault"
            checked={inputs.makeDefault}
            onChange={handleChange}
          />
        </label>
        <ButtonStyles type="submit">Update Address</ButtonStyles>
        <ButtonStyles type="button" onClick={closeMenu}>
          Cancel
        </ButtonStyles>
      </fieldset>
    </Form>
  );
}

UpdateAddress.propTypes = {
  // id: string.isRequired,
  address: object.isRequired,
};
