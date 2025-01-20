export default function EditAvatar() {
  return (
    <form
      className="popup__form"
      name="avatar-form"
      id="edit-avatar-form"
      noValidate
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_url"
          id="avatar-link"
          name="firstInput"
          placeholder="URL da imagem"
          required
          type="url"
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error" data-input="firstInput"></span>
      </label>

      <button type="submit" className="popup__submit-button">
        SALVAR
      </button>
    </form>
  );
}
