import Head from "next/head";
import React from "react";
import Layout from "../../components/layout/layout";
import StoreWidget from "../../components/models/store.widget";
import { getStoresQuery } from "../../handler-functions/stores/get-all-stores";
import { StoreType } from "../../types/store.type";

const Stores = () => {
  const { data, isLoading, error } = getStoresQuery();

  return (
    <div>
      <Head>
        <title>Unboxedkart Stores</title>
      </Head>
      <main>
        <div>
          {isLoading ? (
            <p>Is loading</p>
          ) : (
            data?.map((store: StoreType, index) => <StoreWidget key={index} store={store} />)
          )}
        </div>
      </main>
    </div>
  );
};

export default Stores;

Stores.Layout = Layout;
