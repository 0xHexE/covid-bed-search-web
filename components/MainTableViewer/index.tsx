import React, { useState } from 'react';
import { Statistics } from '../Statistics';
import { Card, Menu, Skeleton } from 'antd';
import useSWR from 'swr';
import { fetcher } from 'utils/fetcher';

export function MainTableViewer() {
  const [kind, setKind] = useState<string>('hospital-beds');

  const { data, error } = useSWR(`/api/hospitals/${kind}`, fetcher);

  if (error) return <div>Failed to load</div>;

  return (
    <>
      <style jsx global>{`
        .content-wrapper {
          display: flex;
        }

        @media (max-width: 799px) {
          .content-wrapper {
            flex-direction: column;
          }
        }

        .app-menu {
          width: 260px;
        }

        .main-container {
          flex-grow: 1;
        }

        @media (min-width: 799px) {
          .main-container {
            margin-left: 24px;
          }
        }

        @media (max-width: 799px) {
          .app-menu {
            width: 100%;
            margin-bottom: 24px;
          }
        }

        .app-title {
          text-transform: capitalize;
        }
      `}</style>
      <div className="content-wrapper">
        <div>
          <Menu
            onClick={(e) => {
              setKind(e.key as string);
            }}
            defaultSelectedKeys={[kind]}
            mode="inline"
            className="app-menu"
          >
            <Menu.Item key="hospital-beds">Hospital Beds</Menu.Item>
            <Menu.Item key="ventilators">Ventilators</Menu.Item>
          </Menu>
        </div>
        <div className="main-container">
          {!data ? (
            <Card>
              <Skeleton active />
            </Card>
          ) : (
            <>
              <h1 className="app-title">{kind.replace('-', ' ')}</h1>
              <Statistics input={data.data} statistics={data.statistics} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
