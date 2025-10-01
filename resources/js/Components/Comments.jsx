import { useForm, router } from '@inertiajs/react';

export default function Comments({ blog, auth }) {
    const { data, setData, post, reset, errors, processing } = useForm({
        comment: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('blogs.comments.store', blog.id), {
            onSuccess: () => reset()
        });
    };

    const handleDelete = (commentId) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce commentaire ?')) {
            router.delete(route('comments.destroy', commentId));
        }
    };

    return (
        <div>
            <h3>Commentaires ({blog.comments?.length || 0})</h3>

            {/* Formulaire d'ajout de commentaire */}
            {auth.user ? (
                <form onSubmit={submit}>
                    <div>
                        <label>Ajouter un commentaire :</label>
                        <textarea
                            value={data.comment}
                            onChange={e => setData('comment', e.target.value)}
                            rows="4"
                            placeholder="Votre commentaire..."
                        />
                        {errors.comment && <div>{errors.comment}</div>}
                    </div>
                    <button type="submit" disabled={processing}>
                        {processing ? 'Envoi...' : 'Publier'}
                    </button>
                </form>
            ) : (
                <p>Connectez-vous pour commenter</p>
            )}

            <hr />

            {/* Liste des commentaires */}
            <div>
                {blog.comments && blog.comments.length > 0 ? (
                    blog.comments.map((comment) => (
                        <div key={comment.id}>
                            <p>
                                <strong>{comment.user.first_name} {comment.user.last_name}</strong>
                                {' - '}
                                <small>{new Date(comment.created_at).toLocaleDateString('fr-FR')}</small>
                            </p>
                            <p>{comment.comment}</p>
                            
                            {auth.user && auth.user.id === comment.user_id && (
                                <button onClick={() => handleDelete(comment.id)}>
                                    Supprimer
                                </button>
                            )}
                            <hr />
                        </div>
                    ))
                ) : (
                    <p>Aucun commentaire pour le moment.</p>
                )}
            </div>
        </div>
    );
}