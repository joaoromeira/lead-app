export type TableCells<R> = {
  label: string;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  content: string | ((params: R) => JSX.Element | string);
}[];

type Row = {
  [key: string]: any;
};

type TableProps = {
  rows?: Row[];
  isLoading?: boolean;
  isUpdating?: boolean;
  cells: TableCells<any>;
};

export const Table = ({
  cells,
  isLoading,
  isUpdating,
  rows = [],
}: TableProps) => {
  const showLoader = isUpdating || isLoading;
  const showNoData = !showLoader && rows?.length === 0;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block w-full align-middle">
          <div className="overflow-hidden rounded-lg border">
            <table
              className="min-w-full divide-y divide-gray-200"
              data-cy="table"
            >
              <thead className="bg-gray-50">
                <tr>
                  {cells.map((cell, index) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-bold uppercase text-gray-500 "
                      key={index.toString()}
                    >
                      {cell.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {!showLoader &&
                  rows.map((row, rowIdx) => (
                    <tr key={rowIdx.toString()}>
                      {cells.map(({ align, content }, cellIdx) => (
                        <td
                          key={cellIdx.toString()}
                          data-cy="table-cell"
                          data-testid="table-cell"
                          className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800"
                        >
                          {typeof content === 'string' ? content : content(row)}
                        </td>
                      ))}
                    </tr>
                  ))}
                {showNoData && (
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                      No data...
                    </td>
                  </tr>
                )}
                {showLoader && (
                  <tr>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800">
                      {isLoading ? 'Loading' : 'Updating'}...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
