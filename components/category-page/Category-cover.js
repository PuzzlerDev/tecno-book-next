const CategoryCover = ({category}) => {

    return category ? (
        <section className="containter-lg mw-992">
            <article className="p-3">
                <div className="row">
                    <h1 className="text-center">{category.categoryTitle}</h1>
                    <p className="mt-4">{category.categoryInfo}</p>
                </div>
            </article>
        </section>
    ): null    
};

// const SectionStyled = styled.section`
//     max-width: 992px;
//     margin-left: auto;
//     margin-right: auto;
// `;

export default CategoryCover;