import NewArticleForm from "./NewArticleForm"

const NewArticlePage = ({ propIsAdmin }) => {
    return (
        <section className="pages new_article">
            <header className="pages_intro">
                <h2 className="pages_intro_title">Ajouter un nouvel article</h2>
            </header> 
            {propIsAdmin === true ?
                <NewArticleForm propIsAdmin={propIsAdmin} />
            :
                <p>Seul l'administrateur de ce site peut poster un article.</p>
            }
        </section>
    )
}

export default NewArticlePage