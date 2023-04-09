import { ContentSubHeading, Playground } from '../../common';
import type { FC } from 'react';

export const TableSection: FC = () => (
  <>
    <ContentSubHeading>Table</ContentSubHeading>
    <Playground>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>The table header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The table body</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </table>
    </Playground>
  </>
);
