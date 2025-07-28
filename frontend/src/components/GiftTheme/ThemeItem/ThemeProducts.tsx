import useFetchThemesProduct from '@/hooks/fetch/useFetchThemesProduct.ts';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '@/storage/userInfo.ts';
import useInfiniteScrollObserver from '@/hooks/useInfiniteScrollObserver.ts';
import {
  ProductsError,
  ProductsList,
  ThemeProductsWrapper,
} from '@/components/GiftTheme/ThemeItem/ThemeProducts.styles.ts';
import CardList from '@/components/Common/CardItem/CardList.tsx';
import { PATH } from '@/constants/path.ts';

interface ThemeProductProps {
  themeId: number;
}

export default function ThemeProducts({ themeId }: ThemeProductProps) {
  const navigate = useNavigate();
  const userInfo = getUserInfo();

  const { list: themeProducts, hasMore, fetchNextPage } = useFetchThemesProduct(themeId);

  const observerRef = useInfiniteScrollObserver({
    fetchNextPage,
    hasMore,
    loading: false,
  });

  return (
    <ThemeProductsWrapper error={false} product={themeProducts.length}>
      {themeProducts.length === 0 ? (
        <ProductsError>상품이 없습니다.</ProductsError>
      ) : (
        <>
          <ProductsList>
            {themeProducts.map((item) => (
              <CardList
                key={item.id}
                image={item.imageURL}
                name={item.name}
                price={item.price.sellingPrice}
                brand={item.brandInfo.name}
                onClick={() =>
                  navigate(userInfo ? `${PATH.ORDER}/${item.id}` : `${PATH.LOGIN}`, {
                    state: { from: `${PATH.ORDER}/${item.id}` },
                  })
                }
              />
            ))}
          </ProductsList>

          <div ref={observerRef} style={{ height: '50px' }} />
        </>
      )}
    </ThemeProductsWrapper>
  );
}
