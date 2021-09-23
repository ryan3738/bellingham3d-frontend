import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { useMenu } from '../../lib/menuState';
import DeleteAddress from './DeleteAddress';
import DisplayAddress from './DisplayAddress';
import UpdateAddress from './UpdateAddress';
import { returnAddress } from '../../lib/returnAddress';
import { ButtonStyles } from '../styles/StateStyles';
import * as types from '../../types/types';

export type AppProps = {
  address: types.Address;
  allowUpdate?: boolean;
  allowDelete?: boolean;
  selectAddress?: (address: types.Address) => void;
};

export default function Address({
  address,
  allowUpdate,
  allowDelete,
  selectAddress,
}: AppProps): JSX.Element {
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
                      onClick={() =>
                        returnAddress({
                          returnFunction: selectAddress,
                          address,
                        })
                      }
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
