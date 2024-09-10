import { useState } from 'react';
import { StyledPagination, PaginationContainer } from './Paginate.styled';

interface PaginateProps<T> {
  itemsPerPage: number;
  array: T[];
  renderItem: (item: T) => JSX.Element;
}

export default function Paginate<T>({
  itemsPerPage,
  array,
  renderItem,
}: PaginateProps<T>) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = array.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(array.length / itemsPerPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    const newOffset = (page - 1) * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>{currentItems && currentItems.map(item => renderItem(item))}</div>

      <PaginationContainer>
        <StyledPagination
          count={pageCount}
          onChange={handlePageChange}
          shape="rounded"
        />
      </PaginationContainer>
    </>
  );
}
