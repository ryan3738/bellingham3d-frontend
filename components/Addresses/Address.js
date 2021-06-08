import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { bool, func } from 'prop-types';
import { useMenu } from '../../lib/menuState';
import DeleteAddress from './DeleteAddress';
import DisplayAddress from './DisplayAddress';
import UpdateAddress from './UpdateAddress';
import { returnAddress } from '../../lib/returnAddress';
import { addressType } from '../../lib/types';
import ButtonStyles from '../styles/ButtonStyles';

export default function Address({
  address,
  allowUpdate,
  allowDelete,
  selectAddress,
}) {
  const { menuOpen, openMenu } = useMenu();
  // function handleClick(e) {
  //   updateShipping(address);
  // }
  return (
    <>
      {address && (
        <div className="address">
          {/* {!address && <CreateAddress />} */}

          <>
            {!menuOpen && (
              <>
                <DisplayAddress address={address} />
                <div className="buttonList">
                  {selectAddress && (
                    <ButtonStyles
                      type="button"
                      title="Select Address"
                      onClick={() => returnAddress(selectAddress, address)}
                    >
                      <FaCheck />
                    </ButtonStyles>
                  )}

                  {allowUpdate && (
                    <ButtonStyles
                      type="button"
                      title="Edit Address"
                      onClick={openMenu}
                    >
                      <FaEdit />
                    </ButtonStyles>
                  )}
                  {allowDelete && (
                    <DeleteAddress id={address.id}>
                      <FaTrash />
                    </DeleteAddress>
                  )}
                </div>
              </>
            )}
            {menuOpen && <UpdateAddress address={address} />}
          </>
        </div>
      )}
      <style jsx>{`
        .wrapper {
          width: 100%;
          height: auto;
        }
        .address {
          width: 100%;
          height: auto;
          text-align: left;
        }

        .buttonList {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border: 0;
          box-shadow: none;
        }
        .button {
          margin: var(--spacing);
        }
      `}</style>
    </>
  );
}
Address.propTypes = {
  // id: string.isRequired,
  address: addressType,
  allowUpdate: bool,
  allowDelete: bool,
  selectAddress: func,
};
