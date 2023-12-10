import { get } from './utils/api';
import { API_SERVICE_URLS } from './utils/constants/api';
import ResponsiveTable from './components/ResponsiveTable';
import { PURCHARSE_HISTORY_COLUMNS } from './utils/constants/purcharseHistory';

export default async function Home() {
  const purchaseHistory = await get(API_SERVICE_URLS.pucharseHistory);
  // create custom error page
  if (purchaseHistory.error) {
    return <>Error {purchaseHistory.code}</>
  }
  return (
    <main>
      <h1>Purchases</h1>
      <ResponsiveTable data={purchaseHistory} columns={PURCHARSE_HISTORY_COLUMNS} />
    </main >
  )
}
