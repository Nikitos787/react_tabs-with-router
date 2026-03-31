import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                key={tab.id}
                className={tab.id === tabId ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {!tabId || !currentTab ? 'Please select a tab' : currentTab.content}
        </div>
      </div>
    </div>
  );
};
