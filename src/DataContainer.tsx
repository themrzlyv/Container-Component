import React from "react";
import { useQuery } from "react-query";

interface iProp {
  getFunc: () => Promise<any>;
  queryId: string;
  children: React.ReactNode;
}

const DataContainer: React.FC<iProp> = ({ getFunc, queryId, children }) => {
  const { data, isLoading, error } = useQuery(queryId, getFunc);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { data, isLoading, error });
        }

        return child;
      })}
    </>
  );
};

export default DataContainer;
