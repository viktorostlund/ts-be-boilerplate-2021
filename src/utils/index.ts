export const loggerParser = (req: any) => {
    const { query, variables, operationName } = req?.body;
    if (operationName === 'IntrospectionQuery') return
    return `GRAPHQL: \nOperation Name: ${operationName} \nQuery: ${query} \nVariables: ${JSON.stringify(variables)}`;
  }
  