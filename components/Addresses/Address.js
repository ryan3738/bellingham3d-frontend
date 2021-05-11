import { FaEdit, FaTrash } from 'react-icons/fa';
import { useMenu } from '../../lib/menuState';
import DeleteAddress from './DeleteAddress';
import DisplayAddress from './DisplayAddress';
import UpdateAddress from './UpdateAddress';

export default function Address({ address }) {
  const { menuOpen, openMenu } = useMenu();

  return (
    <div className="address">
      {!menuOpen && (
        <>
          <DisplayAddress id={address.id} />
          <div className="buttonList">
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
    </div>
  );
}
