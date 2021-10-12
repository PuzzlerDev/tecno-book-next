const CategoryCover = ({ category }) => {
  return category ? (
    <section className="container-lg mx-auto py-5">
        <div className="row justify-content-center">
          <div className="col-9 mt-auto">
            <h1 className="text-center">{category.categoryTitle}</h1>
            <p className="mt-4">{category.categoryInfo}</p>
          </div>
        </div>
    </section>
  ) : null;
};

export default CategoryCover;
