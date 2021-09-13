const combineProviders = (providers) =>
  providers.reduce((Combined, Provider) => ({ children }) => (
    <Combined>
      <Provider>{children}</Provider>
    </Combined>
  ));

//  Example to combine providers
//  const Providers = combineProviders([ApolloProvider, CartStateProvider]);

export { combineProviders };
