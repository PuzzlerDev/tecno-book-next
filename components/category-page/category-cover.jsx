const CategoryCover = ({ category }) => {
  return category ? (
    <section className="container-lg mx-auto">
      <article className="p-3">
        <div className="row justify-content-center">
          <div className="col-9 mt-auto">
            <h1 className="text-center">{category.categoryTitle}</h1>
            <p className="mt-4">{category.categoryInfo}</p>
          </div>
        </div>
      </article>
    </section>
  ) : null;
};

export default CategoryCover;
