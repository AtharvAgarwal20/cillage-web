"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface SearchCtxTypes {
  isSearch: boolean;
  setIsSearch: (value: boolean) => void;
}

const SearchContext = createContext<SearchCtxTypes | undefined>({
  isSearch: false,
  setIsSearch: () => {},
});

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSearch, setIsSearch] = useState(false);

  const value: SearchCtxTypes = {
    isSearch,
    setIsSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchCtx = () => {
  const context = useContext(SearchContext);
  return context;
};
