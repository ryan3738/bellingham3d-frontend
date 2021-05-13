import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { useMenu } from '../../lib/menuState';
import DeleteAddress from './DeleteAddress';
import DisplayAddress from './DisplayAddress';
import UpdateAddress from './UpdateAddress';
import { returnAddress } from '../../lib/returnAddress';
import Button from '../Button';

export default function Address({ address, updateAddress, selectAddress }) {
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
                    <button
                      type="button"
                      onClick={() => returnAddress(selectAddress, address)}
                    >
                      <FaCheck />
                    </button>
                  )}

                  <button type="button" onClick={openMenu}>
                    <FaEdit />
                  </button>
                  <DeleteAddress id={address.id}>
                    <FaTrash />
                  </DeleteAddress>
                </div>
              </>
            )}
            {menuOpen && (
              <UpdateAddress id={address.id} updateAddress={updateAddress} />
            )}
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
          justify-content: space-evenly;
          border: 0;
          box-shadow: none;
          padding: var(--spacing);
        }
      `}</style>
    </>
  );
}
