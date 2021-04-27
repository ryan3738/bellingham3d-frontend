import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Router } from 'next/router';
import useForm from '../../lib/useForm';
import DisplayError from '../ErrorMessage';
import Form from '../styles/Form';

const SINGLE_ADDRESS_QUERY = gql`
  query SINGLE_ADDRESS_QUERY($id: ID!) {
    CustomerAddress(where: { id: $id }) {
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
    }
  }
`;

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
    }
  }
`;

export default function UpdateAddress({ id }) {
  // 1. We need to get the existing product
  const { data, error, loading } = useQuery(SINGLE_ADDRESS_QUERY, {
    variables: { id },
  });
  // console.log(data);

  // 2. We need to get the mutation to update the product
  const [
    updateCustomerAddress,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_ADDRESS_MUTATION);
  // 2.5 Create some state for the form inputs
  const { inputs, handleChange, clearForm, resetForm } = useForm(
    data?.CustomerAddress
  );
  // console.log(inputs);
  if (loading) return <p>Loading...</p>;
  // 3. We need the form to handle the updates
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateCustomerAddress({
          variables: {
            id,
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            company: inputs.company,
            address1: inputs.address1,
            address2: inputs.address2,
            city: inputs.city,
            country: inputs.country,
            zip: inputs.zip,
            phone: inputs.phone,
          },
        }).catch(console.error);

        // console.log(res);
        // Submit the intput fields to the backend
        // TODO: Handle Submit!!!
        // const res = await createProduct();
        // clearForm();
        // Go to that product's page!
        // Router.push({
        //   pathname: `/product/${res.data.createProduct.id}`,
        // });
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
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
        <button type="submit">Update Address</button>
      </fieldset>
    </Form>
  );
}
