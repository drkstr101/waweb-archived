import React from 'react';
import { Td } from '../td';

import { Tr } from './tr';
export const TrExample = () => {
  return (
    <table>
      <tbody>
        <Tr>
          <Td>Tr text</Td>
          <Td>Tr text</Td>
          <Td>Tr text</Td>
        </Tr>
      </tbody>
    </table>
  );
};
