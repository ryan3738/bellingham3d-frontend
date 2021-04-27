import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import { USER_ADDRESSES_QUERY } from '.';
import useForm from '../../lib/useForm';
import DisplayError from '../ErrorMessage';

import Form from '../styles/Form';

const CREATE_ADDRESS_MUTATION = gql`
  mutation CREATE_ADDRESS_MUTATION(
    #   Which variables are getting passed in and what types are they
    $firstName: String!
    $lastName: String!
    $company: String
    $address1: String!
    $address2: String
    $city: String!
    $region: String!
    $country: String!
    $zip: String!
    $phone: String
  ) {
    createCustomerAddress(
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
      }
    ) {
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
    }
  }
`;

// Add make default functionality
export default function CreateAddress() {
  const { inputs, handleChange, clearForm } = useForm({
    firstName: '',
    lastName: '',
    company: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    country: '',
    zip: '',
    phone: '',
  });
  const [createCustomerAddress, { loading, error, data }] = useMutation(
    CREATE_ADDRESS_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: USER_ADDRESSES_QUERY }],
    }
  );
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // Submit the intput fields to the backend
        const res = await createCustomerAddress();
        clearForm();
        // Go to the addresses page
        Router.push({
          pathname: `/account/addresses`,
        });
      }}
    >
      <h2>Add A New Address</h2>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
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

        <button type="submit">+ Add Address</button>
      </fieldset>
    </Form>
  );
}
