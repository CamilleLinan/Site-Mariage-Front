const DeleteArticleModal = (props) => {
    const { onCancel } = props;
    return(
        <>
            POP UP DELETE
            <button onClick={onCancel}>Annuler</button>
        </>
    )
}

export default DeleteArticleModal