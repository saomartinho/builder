import React, { createContext, useCallback, useContext, useRef, useSyncExternalStore } from 'react';

export default function createAppContext<Store>(initialState: Store) {
  function useStoreData(): {
    get: () => Store;
    set: (value: Partial<Store> | ((prevState: Store) => Partial<Store>)) => void;
    subscribe: (callback: () => void) => () => void;
  } {
    const store = useRef(initialState);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback((value: Partial<Store> | ((prevState: Store) => Partial<Store>)) => {
      const newValue = typeof value === 'function' ? value(store.current) : value;

      store.current = { ...store.current, ...newValue };
      subscribers.current.forEach((handler) => handler());
    }, []);

    const subscribe = useCallback((handler: () => void) => {
      subscribers.current.add(handler);
      return () => subscribers.current.delete(handler);
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  }

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<UseStoreDataReturnType | null>(null);

  function Provider({ children }: { children: React.ReactNode }) {
    return <StoreContext.Provider value={useStoreData()}>{children}</StoreContext.Provider>;
  }

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput
  ): [SelectorOutput, (value: Partial<Store> | ((prevState: Store) => Partial<Store>)) => void] {
    const store = useContext(StoreContext);

    if (!store) {
      throw new Error('Store not found');
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => selector(store.get()),
      () => selector(initialState)
    );

    return [state, store.set];
  }

  return {
    Provider,
    useStore,
  };
}
