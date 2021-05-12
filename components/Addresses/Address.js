import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';
import { useMenu } from '../../lib/menuState';
import CreateAddress from './CreateAddress';
import DeleteAddress from './DeleteAddress';
import DisplayAddress from './DisplayAddress';
import UpdateAddress from './UpdateAddress';
import { returnAddress } from '../../lib/returnAddress';

export default function Address({ address, updateAddress }) {
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
                  {updateAddress && (
                    <button
                      type="button"
                      onClick={() => returnAddress(updateAddress, address)}
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
            {menuOpen && <UpdateAddress id={address.id} />}
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
