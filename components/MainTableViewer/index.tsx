import React, { useEffect, useState } from 'react';
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

        @media (max-width: 600px) {
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

        @media (min-width: 600px) {
          .main-container {
            margin-left: 24px;
          }
        }

        @media (max-width: 599px) {
          .app-menu {
            width: 100%;
            margin-bottom: 24px;
          }
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
            <Statistics input={data.data} />
          )}
        </div>
      </div>
    </>
  );
}
