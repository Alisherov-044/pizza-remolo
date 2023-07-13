import { useDispatch, useSelector } from "react-redux";
import { Loading, ContentList, Data, SkeletonList } from "../../components";
import { useEffect } from "react";
import { getCategories } from "../../redux/actions";
import { Header } from "../../layouts";

export const Home = () => {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <main className="home-page main">
      {categories.isLoading ? <Loading /> : null}
      <div className="fixed">
        <Header />
        <h1 className="home-page__title">Categorias</h1>
        <p className="home-page__description">
          Elige nuestras deliciosas pizzas
        </p>
        {categories.items ? (
          <ContentList
            array={categories.items}
            className="categories__list"
            Node={{
              Tag: Data,
              nodeClassName: "category",
            }}
            activeCategory={categories.activeCategory}
          />
        ) : null}
      </div>
      {/* {categories.isLoading ? (
        <SkeletonList count={Math.ceil(Math.random() * 10)} />
      ) : // <ProductsList products={products} />
      null}
      <CardButtonMobile /> */}
    </main>
  );
};
