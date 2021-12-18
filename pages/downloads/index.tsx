import { useRouter } from 'next/dist/client/router';

const DownloadsPage = function (): JSX.Element {
  const { query } = useRouter();
  return <Downloads />;
};

export default DownloadsPage;
